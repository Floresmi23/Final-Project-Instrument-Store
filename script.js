new Vue({
  el: "#store-app",
  
  
  
  data: {
    PU: false, 
    NI: false, 
    Empty: false, 
    reqsMet: false, 
    puIndexEr: null, 
    CITEMS: [],
    PUItem: {},
    name1: "",
    type1: "",
    brand1: "Yamaha",
    price1: "",
    img1: "",
    
    
    
    
    
    
    
//     Base Instruments 
    
    instruments: [
      {
        name: "Guitar",
        type: "Guitar",
        brand: "Maton",
        price: 1800.0,
        img: "https://tse2.mm.bing.net/th?id=OIP.uxwWSblCjjNDXlJ7OFGBrwHaHa&pid=Api&P=0&w=300&h=300"
          
      },
      {
        name: "Piano",
        type: "Piano",
        brand: "Yamaha",
        price: 12000.0,
        img:
     "https://usa.yamaha.com/files/A4ACC9A7B269447488ADA864B7A993CC_12073_1449x1257_71a6bf9a9da59eaff1a077a4cfd65901.jpg"
      },
      {
        name: "Drums",
        type: "Drums",
        brand: "Yamaha",
        price: 1500.00,
        img:
          "https://i2.wp.com/www.moderndrummer.com/wp-content/uploads/2017/09/2013_Live_Custom_EWS_a_0001-copy.jpg?fit=2000%2C1128&ssl=1"
      },
      {
        name: "Saxaphone",
        type: "Saxaphone",
        brand: "Yamaha",
        price: 700.00,
        img:
          "http://www.altomusic.com/media/catalog/product/y/a/yamaha-YAS26-0.jpg"
      },
      {
        name: "Drums",
        type: "Drums",
        brand: "Fender",
        price: 3200.00,
        img: "https://i.pinimg.com/originals/37/04/6e/37046eb17a6fdf300e5076c06f6df527.jpg"
      },
      {
        name: "Flute",
        type: "Flute",
        brand: "Maton",
        price: 200.00,
        img:
          "https://tse3.mm.bing.net/th?id=OIP.UyVRA7hSGMx8T4RvZWE4JgHaD-&pid=Api&P=0&w=327&h=176"
      }
    ]
  },
  
  
  

  methods: {
    PUDetails: function (inst, index) {
      this.puIndexEr = index; 
      this.PUItem = inst;
      this.PU = true;
    },


    removePU: function () {
      this.name1 = "";
      this.type1 = "";
      this.brand1 = "Yamaha";
      this.price1 = "";
      this.img1 = "";
      this.NI = false;
    },


    NINST: function () {
      if (this.img1 === "") {
        this.img1 =
          "https://www.stma.org/wp-content/uploads/2017/10/no-image-icon.png";
      } else {
        this.img1 = this.img1;
      }

      this.instruments.push({
        name: this.name1,
        type: this.type1,
        brand: this.brand1,
        price: this.price1,
        img: this.img1
      });


      this.name1 = "";
      this.type1 = "";
      this.brand1 = "Yamaha";
      this.price1 = "";
      this.img1 = "";
      this.NI = false;
    },


    addToCart: function (inst, index) {
      this.PopUp = false;
      this.CITEMS.push(inst);
      this.instruments.splice(index, 1);
    },


    addToCart2: function (inst) {
      this.CITEMS.push(inst);
      this.instruments.splice(this.puIndexEr, 1); 
    },


    emptyCart: function () {
      this.instruments = this.instruments.concat(this.CITEMS);
      this.CITEMS = [];
    },


    imageUrlAlt(event) {
      event.target.src =
        "https://www.stma.org/wp-content/uploads/2017/10/no-image-icon.png";
    }
  },

  computed: {
    whatLeft: function () {
      if (
        this.name1.length < 1 &&
        this.type1.length < 1 &&
        this.price1.length < 1
      ) {
        this.reqsMet = false;
        return "‏‏‎ ‎";
      } else if (
        this.name1.length >= 1 &&
        this.type1.length < 1 &&
        this.price1.length < 1
      ) {
        this.reqsMet = false;
        return "Still required: instrument type & price.";
      } else if (
        this.name1.length < 1 &&
        this.type1.length >= 1 &&
        this.price1.length < 1
      ) {
        this.reqsMet = false;
        return "Still required: instrument name & price.";
      } else if (
        this.name1.length < 1 &&
        this.type1.length < 1 &&
        this.price1.length >= 1
      ) {
        this.reqsMet = false;
        return "Still required: instrument name & type.";
      } else if (
        this.name1.length >= 1 &&
        this.type1.length >= 1 &&
        this.price1.length < 1
      ) {
        this.reqsMet = false;
        return "Still required: instrument price.";
      } else if (
        this.name1.length < 1 &&
        this.type1.length >= 1 &&
        this.price1.length >= 1
      ) {
        this.reqsMet = false;
        return "Still required: instrument name.";
      } else if (
        this.name1.length >= 1 &&
        this.type1.length < 1 &&
        this.price1.length >= 1
      ) {
        this.reqsMet = false;
        return "Still required: instrument type.";
      } else if (
        this.name1.length >= 1 &&
        this.type1.length >= 1 &&
        this.price1.length >= 1 &&
        this.img1.length < 10
      ) {
        this.reqsMet = true;
        return "You can now submit. Feel free to add an image if you'd like! Not necessary, tho.";
      } else {
        this.reqsMet = true;
        return "You can now submit. Nice job adding an image!";
      }
    }
  },

  watch: {
    instruments: function () {
      if (this.instruments.length <= 0) {
        this.Empty = true;
      } else {
        this.Empty = false;
      }
    }
  }
});