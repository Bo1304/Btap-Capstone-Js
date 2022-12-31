function Product(Id, Name, Price, Creen, BlackCamera, FrontCamera, Img, Desc , Type, Quantity) {
  this.id = Id;
  this.name = Name;
  this.price = Price;
  this.creen = Creen;
  this.blackCamera = BlackCamera;
  this.frontCamera = FrontCamera;
  this.img = Img;
  this.desc = Desc;
  this.type = Type;
  this.quality = Quantity;
  this.calTotal = function () {
    return (this.price * this.quality);
  };
}
