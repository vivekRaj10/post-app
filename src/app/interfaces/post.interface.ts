export interface Post {
  author: string;
  title: string;
  url: string;
  created_at: string;
  created_at_i?: number;
  points?: number;
  comment_text?: string;
  num_comments?: number;
  relevancy_score?: number;
  objectID?: string;
  parent_id?: number;
  story_id?: number;
  story_text?: string;
  story_title?: string;
  story_url?: string;
}
