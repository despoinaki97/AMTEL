export class User {

    constructor(
      public id:number,
      public photo: string,
      public name:string,
      public password:string,
      public course: number,  
      public sessionCounter: number
      ) { }

    }