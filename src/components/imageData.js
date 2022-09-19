  // array of objects containing paths to images
 export  const imageData = [
    {path: require("../images/Boruto.png"), name:"Boruto", isSelected:false },
    {path: require("../images/Naruto.png"), name:"Naruto", isSelected:false },
    {path: require("../images/Lee.png"), name:"Lee", isSelected:false },
    {path: require("../images/Neji.png"), name:"Neji", isSelected:false },
    {path: require("../images/Pain.png"), name:"Pain", isSelected:false },
    {path: require("../images/Sai.png"), name:"Sai", isSelected:false },
    {path: require("../images/Sasuke.png"), name:"Sasuke", isSelected:false },
    {path: require("../images/Shikamaru.png"), name:"Shikamaru", isSelected:false },
    {path: require("../images/Shino.png"), name:"Shino", isSelected:false },
    {path: require("../images/Tobi.png"), name:"Tobi", isSelected:false },
    {path: require("../images/Madara.png"), name:"Madara", isSelected:false },
    {path: require("../images/Kakashi.png"), name:"Kakashi", isSelected:false },
  ];

  export default {imageData};




  // working code
// {
//  imageArray.map( source => <div className="col-4 h-5">
//     <img src={source.path} key={uuid()} alt=""  className="w-50 h-50" onClick={handleClick} />
//     <h6>{source.name}</h6>
//   </div>  ) 
//  }