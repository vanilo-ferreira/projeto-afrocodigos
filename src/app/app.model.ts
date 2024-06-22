export interface ResponseCollaborators {
  data: Collaborators[];
}

export interface Collaborators {
  id: number;
  created_at: number;
  name: string;
  role: string;
}

export interface RequestUpdate {
  name: string;
  role: string;
}

export interface ResponseCollaborator{
  id: number;
  created_at: number;
  name: string;
  role: string;
}

export interface ResponseUpdateCollaborator{
  id: number;
  created_at: number;
  name: string;
  role: string;
}