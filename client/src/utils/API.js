import axios from "axios";

export default {

  // Saves a user to the database
  saveContact: function(contactData) {
    return axios.post("/api/contacts", contactData);
  }
};