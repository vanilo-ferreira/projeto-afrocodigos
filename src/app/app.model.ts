export interface ResponseCollaborators {
  data: Collaborators[];
}

export interface Collaborators {
  id: number;
  created_at: number;
  name: string;
  role: string;
}
