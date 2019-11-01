<?php include 'cart.php';
header("Access-Control-Allow-Origin: *");
$pc = new productCatalog();
$cart = new cart();
$cart->updateCart();
if(!isset($_SESSION)) 
{ 
    session_start(); 
} 
$cart->updateCart();
if (isset($_GET['req']))
{
    if ($_GET['req'] === 'init')
    {
        $pc->loadCatalog();
    }
    // else if ($_GET['req'] === 'update')
    // {
    //     $cart->loadCart();
    // }
}
if(isset($_POST['req']))               //check if there is a POST
{
    if ($_POST['req'] === 'update')         //check what kind of req(uest)
    {
        foreach($_POST as $key => $value)
        {
            if ($key !== 'req')             //loop through and ignore req
            {
                $cart->buyProduct($key,$value);
            }
        }
        $cart->updateCart();
        $cart->loadCart();
    }
    else if ($_POST['req'] === 'checkout')
    {
        if (!empty($_POST['code']) && !empty($_POST['quantity']))
        {
            $cart->checkOut($_POST['code'], $_POST['quantity']);
            $pc->loadCatalog();
        }
        else{
            echo 'something went wrong';
        }
    }
}

?>