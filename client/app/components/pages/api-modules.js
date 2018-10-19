
import axios from "axios";

export default {
      getImages: function() {
        return axios.get("/api/afiles");
      },
      deleteImage: function(id){
        return axios.delete(`/filesdele/${id}`)
      }
};
