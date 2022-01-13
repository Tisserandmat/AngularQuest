import {Skill} from "./skill";

export class Developer {

  public lastname: string | undefined;
  public firstname: string | undefined;
  public age: number | undefined;
  public sexe: string | undefined;
  public bio: string | undefined;
  public skills: Skill[] | undefined;


  constructor(lastname: string | undefined, firstname: string | undefined, age: number | undefined, sexe: string | undefined,
              bio: string | undefined, skills: Skill[] | undefined) {
    this.lastname = lastname;
    this.firstname = firstname;
    this.age = age;
    this.sexe = sexe;
    this.bio = bio;
    this.skills = skills;
  }

}
