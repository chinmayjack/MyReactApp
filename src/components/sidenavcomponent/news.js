import React, { Component } from 'react';


class News extends Component {
  constructor(props) {
      super(props)
      this.state = {
          newsItems:[]
      }
      this.getNews = this.getNews.bind(this);
  }
  componentDidMount() {
    this.intervalId = setInterval(() => this.getNews(), 5000);
    this.getNews();
  }

  componentWillUnmount() {
      clearInterval(this.intervalId);
  }
  getNews() {

      let curr = this;
        var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=ba4ba92690c64ff9bf0be93aeeb2fe12';
        var req = new Request(url);
        fetch(req)
            .then(function(response) {
                response.json().then(function(data){
                    
                    let newsData = data.articles.sort(() => 0.5 - Math.random());
                    let result = [];
                    for(let i=0;i<5;i++){
                        let currData = newsData[i];
                        result[i] = {news:currData.title, link:currData.url}
                    }
                    curr.setState({newsItems:result})
                });
        })
  }
  render() {
    return (
      <div >
        <ul>
          {
            this.state.newsItems.map((news,index) => 
               <li key={index}><a href={news.link}> {news.news}</a> </li>
            )
          }
          </ul>
      </div>
    )
    
  }
}

export default News;
