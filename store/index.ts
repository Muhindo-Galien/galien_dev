import { Experience, PageInfo, Project, Skill, Social, Writting, Youtube } from './../typings.d';
import { createGlobalState } from "react-hooks-global-state";

interface Props {
  experience:Experience[],
  pageInfo:PageInfo[],
  writting:Writting[],
  youtubes:Youtube[],
  socials:Social[],
  skills:Skill[],
}

interface InitialState {
  experience: Experience[];
  pageInfo: PageInfo[];
  writting: Writting[];
  youtubes: Youtube[];
  projects: Project[];
  socials: Social[];
  skills: Skill[];
}

const initialState: InitialState = {
  experience: [],
  pageInfo: [],
  writting: [],
  youtubes: [],
  projects: [],
  socials: [],
  skills: []
};

const {setGlobalState, useGlobalState, getGlobalState } = createGlobalState(initialState);

export {
  useGlobalState,
  setGlobalState,
  getGlobalState,
};
