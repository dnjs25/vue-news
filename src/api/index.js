import axios from 'axios';

// HTTP Request & Response 관련 기본 설정
const config = {
  baseUrl: 'https://api.hnpwa.com/v0/'
};

// API 함수 정리
// 나중에 도메인 별로 API 함수를 파일을 나눠서 관리할 수 있음
function fetchNewsList() {
  return axios.get(`${config.baseUrl}news/1.json`);
}

function fetchAskList() {
  return axios.get(`${config.baseUrl}ask/1.json`);
}

function fetchJobsList() {
  return axios.get(`${config.baseUrl}jobs/1.json`);
}

export {
  fetchNewsList,
  fetchAskList,
  fetchJobsList
}
