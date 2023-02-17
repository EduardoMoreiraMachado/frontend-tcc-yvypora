// props são atributos passados para o componente em outro arquivo
export const PostCard = ({title, cover, body, id}) => (
    <div className='post'>
        <img src={cover} alt={[title]}/>
        <div className="post-content">
        <h1 key={id}>{title}</h1>
        <p>{body}</p>
        </div>
    </div>
);