<?php
include 'productCatalog.php';
if(!isset($_SESSION)) 
{ 
    session_start(); 
}
if(!isset($_SESSION['inCart']))
{
 $_SESSION['inCart']=array();
} 
class cart      //this class is used to store cart status and infos
{
    //What I already have: (hopefully) a global var SESSION that store products and what is in cart: an array with object of product code : buying quantity
    //What I need: class member that store value according to SESSION, modify the SESSION var.
    protected $isEmpty = true;
    protected $productsInCart = array();        //products info and buying quantities
    function __construct()
    {
        if ($_SESSION['inCart'] != array())     //an array of array. key is index and value is object.
        {
            $this->isEmpty = false;
        }
    }
    function updateCart()
    {
        $this->productsInCart = array();
        foreach($_SESSION['inCart'] as $object)     //$object : code => quantity
        {
            $code = key($object);       //get the product code as the key of the $object
            $key = 0;
            foreach($_SESSION['products'] as $index => $product)    //search that code in values of key 'code' in SESSION products array and get the key.
            {
                if ($product->getCode() == $code)
                {
                    $key = $index;
                    break;
                }
            }
            $product = $_SESSION['products'][$key];     //get the product as the value of the key
            $originalQuantity = $product->getQuantity();        //get the original quantity of the product
            $buyingQuantity = current($object);     //get the quantity user want to buy
            $product->setQuantity($originalQuantity - $buyingQuantity);     //modify the remain quantity of the product
            $_SESSION['products'][$key] = $product;     //save it back to the SESSION
            $product->setQuantity($buyingQuantity);     //set quantity to the buying one
            array_push($this->productsInCart,$product);
        }
    }
    function loadCart()
    {
        $returnData = array();
        foreach($this->productsInCart as $object)
        {
            $dto = array('image' => $object->getImagePath(), 'name' => $object->getName(), 'price' => $object->getPrice(), 'code' => $object->getCode(), 'quantity' => $object->getQuantity());
            array_push($returnData, $dto);
        }
        $returnData = json_encode($returnData);
        echo $returnData;
    }
    function buyProduct($code, $quantity)       //code and quantity from add button in ProductCatalog
    {
        // echo json_encode($_SESSION['inCart']);
        // echo "<->";
        // if(!array_key_exists($code,$_SESSION['inCart']))
        // {
        //     array_push($_SESSION['inCart'], array($code => $quantity));
        // }
        // else
        // {   //$_SESSION['inCart'][$code] = $_SESSION['inCart'][$code] + $quantity;
        //     //problematic case: 
        //     //20 in stock, I buy 3, remain quantity is updated to 17
        //     //I then buy 4 more, wanting to buy 7, remain quantity is updated to 17 - 7 = 10???
        //     //Solution: inCart just store the newest quantity, React state will show the add up.
        //     $_SESSION['inCart'][$code] = $quantity;
        // }
        $exist = false;
        foreach($_SESSION['inCart'] as $index => $object)     //$object : code => quantity  0 => array(code => quantity)
        {
            $iCcode = key($object);
            if ($iCcode == $code)
            {
                $exist = true;
                $_SESSION['inCart'][$index][$iCcode] = $quantity;
                break;
            }
        }
        if (!$exist)
        {
            array_push($_SESSION['inCart'], array($code => $quantity));
        }
        // echo json_encode($_SESSION['inCart']);
        // echo $code." ".$quantity;
    }
    function checkOut($code, $quantity)         //buying cart - an array of code => quantity
    {  
        foreach($code as $id => $value)
        {
            $key = 0;
            foreach($_SESSION['products'] as $index => $product)    //search that code in values of key 'code' in SESSION products array and get the key.
            {
                if ($product->getCode() == $value)
                {
                    $key = $index;
                    break;
                }
            }
            $current = $_SESSION['products'][$key]->getQuantity();
            if ($current - $quantity[$id] > 0)
            {
                $_SESSION['products'][$key]->setQuantity($current - $quantity[$id]);
            }
            else if ($current == $quantity[$id])
            {
                $_SESSION['products'][$key]->setQuantity(0);
            }
        }

    }

}

//products with 0 quantity shouldn't be on the list.