import './ImageList.css';
import ImageShow from './ImageShow';

function ImageList({ images }) {
    const renderedImges = images.map((image) => {
        return (
            <div key={image.id}>
                <ImageShow image={image} />
            </div>
        );
    });

    return (
        <div className='image-list'>
            {renderedImges}
        </div>
    );
}

export default ImageList;