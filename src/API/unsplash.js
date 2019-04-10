import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 44d60b38c0f6b82c2dd52954baf81db8a2bf76a739d3fedfd49dd4f462663fbb'
  }
});
