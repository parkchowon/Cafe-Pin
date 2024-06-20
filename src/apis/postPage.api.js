import supabase from './supabase';

export const fetchReviewItem = async (post_id) => {
  const response = await supabase.from('reviews').select().eq('id', `${post_id}`);
  return response.data;
};
