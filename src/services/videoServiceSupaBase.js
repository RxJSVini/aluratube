import { supabase } from "../supabase";
import { getThumbnail } from "../utils/getThumbnail";
export function videoService() {
  return {
    getAllVideos() {
      return supabase.from("videos").select("*");
    },

    setNewVideo({
        title,
        url,
        thumb,
        playlist
    }) {
      return supabase
        .from("videos")
        .insert({
          title: title,
          url: url,
          thumb: getThumbnail(thumb),
          playlist: playlist,
        })
        .then((response) => {
          console.log(response.status);
        });
    },
    
    }
  };
}
