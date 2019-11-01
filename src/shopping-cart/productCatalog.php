<?php
include 'product.php' ;
class productCatalog    //store data, display the products and create product instance for each dataset.
{
    public $image = array('iPhone11maxpro', 'Kindle');
    public $name = array('iPhone 11 Max Pro', 'Amazon Kindle Paper White 201x');
    public $price = array('1700', '100');
    public $code = array('ip11','kpw');
    public $quantity = array('20', '10');
    public $products = array();     //this is an array of objects (products)
    function __construct()
    {
        foreach($this->image as $i => $v)
        {
            $product = new product($v,$this->name[$i], $this->price[$i], $this->code[$i], $this->quantity[$i]);
            array_push($this->products, $product );
        }
        if(!isset($_SESSION)) 
        { 
            session_start(); 
        } 
        $_SESSION['products'] = $this->products;
        // $_SESSION['inCart'] = array(array('kpw' => '3'), array('ip11' => '4'));
        $_SESSION['inCart'] = array();
    }
    function loadCatalog()      //this init catalog on React ProductCatalog
    {
        $returnData = array();
        foreach($this->products as $object)
        {
            $dto = array('image' => $object->getImagePath(), 'name' => $object->getName(), 'price' => $object->getPrice(), 'code' => $object->getCode(), 'quantity' => $object->getQuantity());
            array_push($returnData, $dto);
        }
        $returnData = json_encode($returnData);
        echo $returnData;
    }
}
?>