interface SocialLinks {
  linkedin: string;
  twitter: string;
  github: string;
}

export interface ITeamMember {
  name: string;
  position: string;
  image: string;
  bio: string;
  social: SocialLinks;
}
