import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store";
import ExpandablePanel from "./ExpandablePanel";
import Skeleton from './Skeleton';
import Button from "./Button";

function AlbumsList({ user }) {
    const { data, error, isLoading } = useFetchAlbumsQuery(user);
    const [addAlbum, results] = useAddAlbumMutation();

    const handleAddAlbum = () => {
        addAlbum(user);
    };

    let content;
    if (isLoading) {
        content = <Skeleton times={2} className="h-10 w-full" />
    } else if (error) {
        content = <div>Error loading Albums</div>
    } else {
        content = data.map(album => {
            const header = <div>{album.title}</div>
            return (
                <ExpandablePanel key={album.id} header={header}>
                    List of photos in the albums
                </ExpandablePanel>
            );
        });
    }

    return (
        <div>
            <div className="m-2 flex flex-row items-center justify-between">
                <h3 className="text-lg font-bold">Albums For {user.name}</h3>
                <Button onClick={handleAddAlbum}>
                    + Add Album
                </Button>
            </div>
            <div>
                {content}
            </div>
        </div>
    );
}

export default AlbumsList;