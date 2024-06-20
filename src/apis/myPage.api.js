// // import {supabase} from './supabase';
// import { v4 as uuidv4 } from "uuid";

// export const uploadFile = async (file) => {
//   try {
//     // 파일 확장자 추출 (예: .png, .jpg 등)
//     const fileExt = file.name.split('.').pop();
//     const fileName = `${uuidv4()}.${fileExt}`;
//     const filePath = `public/${fileName}`;

//     // 파일을 Supabase 스토리지에 업로드
//     const { data: avatarData, error: uploadError } = await supabase.storage
//       .from("avatar")
//       .upload(filePath, file);

//     if (uploadError) {
//       throw uploadError;
//     }

//     // 업로드된 파일의 공개 URL 가져오기
//     const { data: publicUrlData, error: urlError } = supabase.storage
//       .from("avatar")
//       .getPublicUrl(avatarData.path);

//     if (urlError) {
//       throw urlError;
//     }

//     return publicUrlData.publicUrl;
//   } catch (error) {
//     console.error("Error uploading file:", error.message);
//     return null;
//   }
// };

// export const getPosts = async () => {
//   const { data: posts, error } = await supabase.from("posts").select();
//   console.log("posts:", posts);
//   console.log("error:", error);
//   if (error) {
//     console.log(error);
//     return;
//   }
//   return posts;
// };

// export const createPost = async ({ content, img_url = null, user_id }) => {
//   const { data: posts, error } = await supabase
//     .from("posts")
//     .insert({ content, img_url, user_id })
//     .select("*");
//   console.log("posts in createPost:", posts);
//   if (error) {
//     console.log(error);
//     return;
//   }
//   return posts;
// };