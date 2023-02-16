interface SanityBody{
  _createdAt:string,
  _id:string,
  _updatedAt:string,
}

interface Image{
  _type:'image',
  asset:{
    _ref:string;
    _type:'reference';
  }
}

export interface Technology extends SanityBody{
  _type:'skill';
  image:Image;
  title:string;
}
export interface Skill extends SanityBody{
  _type:'skill';
  image:Image;
  title:string;
}
export interface Project extends SanityBody{
  title:string;
  _type:"prject",
  image:Image,
  summary:string,
  technologies:Technology[];
  linkToBuildLive:string;
  linkToGitHub:string;
}

export interface Experience extends SanityBody{
  _type:"experience",
  jobTitle:string;
  companyName:string;
  dateStarted:date;
  dateEnd:date;
  isCurrentlyWorkingHere:boolean;
  points:string;
  phoneNumber:string;
  technologies:Technology[];

}

export interface PageInfo extends SanityBody{
  _type:'pageInfo';
  name:string;
  role:string;
  heroImage:Image;
  heroDescription:string;
  backgroundInformation:string;
  profilePic:Image;
  phoneNumber:string;
  email:string;
}

export interface Social extends SanityBody{
  _type:'social',
  title:string,
  url:string
}

export interface Writting extends SanityBody{
  _type:'writting',
  title:string,
  url:string
}
export interface Youtube extends SanityBody{
  _type:'youtube',
  title:string,
  url:string
}