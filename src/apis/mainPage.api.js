import supabase from './supabase';

export const fetchReviewsByLatest = async (onlyTrueHashtagObj) => {
  if (Object.keys(onlyTrueHashtagObj).length === 0) {
    const response = await supabase
      .from('reviews')
      .select()
      .eq('해시태그 없음', true)
      .order('created_at', { ascending: false });
    return response.data;
  } else if (Object.keys(onlyTrueHashtagObj).length === 6) {
    const response = await supabase.from('reviews').select().order('created_at', { ascending: false });
    return response.data;
  } else {
    const generateApiText = () => {
      let filterApiText = '';
      Object.keys(onlyTrueHashtagObj).forEach((key) => {
        filterApiText = filterApiText + `${key}.eq. true,`;
      });

      filterApiText = filterApiText.substring(0, filterApiText.length - 2);
      return filterApiText;
    };

    const response = await supabase
      .from('reviews')
      .select()
      .or(generateApiText())
      .order('created_at', { ascending: false });
    return response.data;
  }
};

export const fetchReviewsByOldest = async (onlyTrueHashtagObj) => {
  if (Object.keys(onlyTrueHashtagObj).length === 0) {
    const response = await supabase
      .from('reviews')
      .select()
      .eq('해시태그 없음', true)
      .order('created_at', { ascending: true });
    return response.data;
  } else {
    const generateApiText = () => {
      let filterApiText = '';
      Object.keys(onlyTrueHashtagObj).forEach((key) => {
        filterApiText = filterApiText + `${key}.eq. true,`;
      });

      filterApiText = filterApiText.substring(0, filterApiText.length - 2);
      return filterApiText;
    };

    const response = await supabase
      .from('reviews')
      .select()
      .or(generateApiText())
      .order('created_at', { ascending: true });
    return response.data;
  }
};
