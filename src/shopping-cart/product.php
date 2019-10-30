<?php
class product { //store the data structure of a product, with set and get functions.
    protected $imagePath;
    protected $name;
    protected $price;
    protected $code;
    protected $quantity;
    function __construct($imgPath, $name, $price, $code, $quantity)
    {
        $this->imagePath = $imgPath;
        $this->name = $name;
        $this->price = $price;
        $this->code = $code;
        $this->quantity = $quantity;
    }
    function getImagePath()
    {
        return $this->imagePath;
    }
    function getName()
    {
        return $this->name;
    }
    function getPrice()
    {
        return $this->price;
    }
    function setImagePath($imgPath)
    {
        $this->imagePath = $imgPath;
    }
    function getQuantity()
    {
        return $this->quantity;
    }
    function setQuantity($q)
    {
        $this->quantity = $q;
    }
    function setName($name)
    {
        $this->name = $name;
    }
    function setPrice($price)
    {
        $this->price = $price;
    }
    function getCode()
    {
        return $this->code;
    }
    function setCode($code)
    {
        $this->code = $code;
    }
    // function getInfoByCode($code)
    // {
    //     return array(getImagePath(), getName(), getPrice());
    // }

}
?>