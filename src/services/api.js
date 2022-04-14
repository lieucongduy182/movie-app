import axios from 'axios';

const token =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMDVmOGQ1M2Y5M2UyNjcwODdmMDlmMDVkZWU5ZTM0MiIsInN1YiI6IjYyNTY2ZGY4MWQzMTQzMDE4ZmFiYWZhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.44oXJaSoioPW3tvjytxLzBknvF-0vMYXJWT4QE7Fztk';

export default axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Authorization: `Bearer ${token}`,
    },
});
