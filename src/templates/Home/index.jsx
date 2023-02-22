import './style.css';
import { Component } from 'react';
import { loadPosts } from '../../utils/load-posts';
import { Posts } from '../../components/Posts';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

// componente de classe
class Home extends Component {
  // responsável por gerenciar o estado do componente
  // toda vez que o estado muda, o método render é chamado de novo 
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postPerPage: 2,
    searchValue: ''
  };
  // executa após um componente ser criado
  async componentDidMount() {
    await this.loadPosts();
  }
  loadPosts = async () => {
    const { page, postPerPage } = this.state;
    const postsAndPhotos = await loadPosts();
    this.setState({ 
      posts: postsAndPhotos.slice(page, postPerPage),
      allPosts: postsAndPhotos
    });
  }
  loadMorePosts = () => {
    const {
      page,
      postPerPage,
      allPosts,
      posts
    } = this.state;
    const nextPage = page + postPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postPerPage)
    posts.push(...nextPosts);

    this.setState({ posts, page: nextPage })
  } 
  handleChange = (event) => {
    const {value} = event.target;
    this.setState({ searchValue: value })
  }
  // executa quando o componente é atualizado
  componentDidUpdate() {
  }
  componentWillUnmount() {
  }
  // sempre que o estado é atualizado, a render é criada de novo
  render() {
    const { posts, page, postPerPage, allPosts, searchValue } = this.state;
    const noMorePosts = page + postPerPage >= allPosts.length;
    const filteredPosts = !!searchValue ? 
      // se houver valor em 'searchValue' irá filtrar todos os posts que contém o valor de 'searchValue' como título
      allPosts.filter(post => {
        return post.title.toLowerCase().includes(searchValue.toLowerCase());
      }) 
      : 
      // se não houver valor, irá retornar somente os posts
      posts;
    return (
      <section className='container'>
        <div className="search-container">
          {!!searchValue && (
            <h1>Search value: {searchValue}</h1>
          )}
          <Input
            searchValue={searchValue}
            handleChange={this.handleChange} 
          />
        </div>
        {filteredPosts.length > 0 && (
          <Posts posts={filteredPosts} />
        )}
        {filteredPosts.length === 0 && (
          <p>Não existem posts</p>
        )}
        <div className="button-container">
          {!searchValue && (
            <Button 
              text="Load more posts"
              onClick={this.loadMorePosts} 
              disabled={noMorePosts}
            />
          )}
        </div>
      </section>
    );  
  }
}

export default Home;
