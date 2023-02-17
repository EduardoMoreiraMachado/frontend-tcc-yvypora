import './style.css';
import { Component } from 'react';
import { loadPosts } from '../../utils/load-posts';
import { Posts } from '../../components/Posts';

// componente de classe
class Home extends Component {
  // responsável por gerenciar o estado do componente 
  state = {
    posts: []
  };   
  // executa após um componente ser criado
  async componentDidMount() {
    await this.loadPosts();
  }
  loadPosts = async () => {
    const postsAndPhotos = await loadPosts();
    this.setState({ posts: postsAndPhotos });
  } 
  // executa quando o componente é atualizado
  componentDidUpdate() {
  }
  componentWillUnmount() {
  }
  // sempre que o estado é atualizado, a render é criada de novo
  render() {
    const { posts } = this.state;
    return (
      <section className='container'>
        <Posts posts={posts} />
      </section>
    );  
  }
}

export default Home;
