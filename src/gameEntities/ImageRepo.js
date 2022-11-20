import backgroundImg from "../assets/background.png";
// import houseNeutralImg from "../assets/house/house_neutral.svg";
// import houseNeutralEyesClosed from "../assets/house/house_neutral_eyes_closed.svg";
// import houseLookLeft0Img from "../assets/house/house_look_left0.svg";
// import houseLookLeft1Img from "../assets/house/house_look_left1.svg";
// import houseLookLeft2Img from "../assets/house/house_look_left2.svg";
// import houseLookRight0Img from "../assets/house/house_look_right0.svg";
// import houseLookRight1Img from "../assets/house/house_look_right1.svg";
// import houseLookRight2Img from "../assets/house/house_look_right2.svg";
// import houseWalkLeft1Img from "../assets/house/house_walk_left1.svg";
// import houseWalkLeft2Img from "../assets/house/house_walk_left2.svg";
// import houseWalkRight1Img from "../assets/house/house_walk_right1.svg";
// import houseWalkRight2Img from "../assets/house/house_walk_right2.svg";
// import houseSquished0Img from "../assets/house/house_squished0.svg";
// import houseSquished1Img from "../assets/house/house_squished1.svg";
// import houseSquished2Img from "../assets/house/house_squished2.svg";
// import houseSquishedSquint0Img from "../assets/house/house_squished_squint0.svg";
// import houseSquishedSquint1Img from "../assets/house/house_squished_squint1.svg";
// import houseSquishedSquint2Img from "../assets/house/house_squished_squint2.svg";
import houseNeutral0Img from "../assets/house/character-idle1.png";
import houseNeutral1Img from "../assets/house/character-idle2.png";
import houseNeutralEyes0Closed from "../assets/house/character-eyesclosed-idle1.png";
import houseNeutralEyes1Closed from "../assets/house/character-eyesclosed-idle2.png";
import houseLookLeft0Img from "../assets/house/house1.png";
import houseLookLeft1Img from "../assets/house/house1.png";
import houseLookLeft2Img from "../assets/house/house1.png";
import houseLookRight0Img from "../assets/house/house1.png";
import houseLookRight1Img from "../assets/house/house1.png";
import houseLookRight2Img from "../assets/house/house1.png";
import houseWalkLeft1Img from "../assets/house/house1.png";
import houseWalkLeft2Img from "../assets/house/house1.png";
import houseWalkRight1Img from "../assets/house/house1.png";
import houseWalkRight2Img from "../assets/house/house1.png";
import houseSquished0Img from "../assets/house/house1.png";
import houseSquished1Img from "../assets/house/house1.png";
import houseSquished2Img from "../assets/house/house1.png";
import houseSquishedSquint0Img from "../assets/house/house1.png";
import houseSquishedSquint1Img from "../assets/house/house1.png";
import houseSquishedSquint2Img from "../assets/house/house1.png";
import treeBasic0Img from "../assets/scenery/tree-basict1.png";
import treeBasic1Img from "../assets/scenery/tree-basict2.png";
import treeBasic2Img from "../assets/scenery/tree-basict3.png";
import treeBasic3Img from "../assets/scenery/tree-basict4.png";
import flowerBlue0Img from "../assets/scenery/flower-blue1.png";
import flowerBlue1Img from "../assets/scenery/flower-blue2.png";
import flowerBlue2Img from "../assets/scenery/flower-blue3.png";

const imageSources = {
  background: backgroundImg,
  house: {
    neutral: {
      idle: [houseNeutral0Img, houseNeutral1Img],
      eyesClosed: [houseNeutralEyes0Closed, houseNeutralEyes1Closed],
    },
    look: {
      left: [houseLookLeft0Img, houseLookLeft1Img, houseLookLeft2Img],
      right: [houseLookRight0Img, houseLookRight1Img, houseLookRight2Img],
    },
    walk: {
      left: [houseWalkLeft1Img, houseWalkLeft2Img, houseLookLeft2Img],
      right: [houseWalkRight1Img, houseWalkRight2Img, houseLookRight2Img],
    },
    squish: {
      neutral: [houseSquished0Img, houseSquished1Img, houseSquished2Img],
      squint: [
        houseSquishedSquint0Img,
        houseSquishedSquint1Img,
        houseSquishedSquint2Img,
      ],
    },
  },
  tree: {
    left: [treeBasic0Img, treeBasic1Img, treeBasic2Img, treeBasic3Img],
    right: [treeBasic0Img, treeBasic1Img, treeBasic2Img, treeBasic3Img],
  },
  flower: {
    blue: [flowerBlue0Img, flowerBlue1Img, flowerBlue2Img],
  },
};

const castToImages = (imageTree) => {
  let output = {};

  Object.entries(imageTree).forEach(([k, v]) => {
    if (typeof v === "string") {
      output[k] = new Image();
      output[k].src = v;
    } else if (Array.isArray(v)) {
      output[k] = v.map((e) => {
        const img = new Image();
        img.src = e;
        return img;
      });
    } else {
      output[k] = castToImages(v);
    }
  });

  return output;
};

export const loadImageRepo = () => castToImages(imageSources);
