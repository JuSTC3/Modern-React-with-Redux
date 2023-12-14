import { useEffect } from "react";
import { useSelector } from "react-redux";
import { addUser, fetchUsers } from "../store";
import Button from './Button';
import Skeleton from "./Skeleton";
import { useThunk } from "../hooks/use-thunk";
import UsersListItem from "./UsersListItem";

function UsersList() {
    const [doFetchUsers, isLoadingUsers, isLoadingUsersError] = useThunk(fetchUsers);
    const [doCreateUsers, isCreatingUser, isCreatingUserError] = useThunk(addUser);
    //const dispatch = useDispatch();
    // const { isLoading, data, error } = useSelector((state) => {
    //     return state.users;
    // });
    const { data } = useSelector((state) => {
        return state.users;
    });

    useEffect(() => {
        doFetchUsers();
    }, [doFetchUsers]);

    const handleUserAdd = () => {
        doCreateUsers();
    };

    let content;

    if (isLoadingUsers) {
        content = <Skeleton times={6} className="h-10 w-full" />;
    } else if (isLoadingUsersError) {
        content = <div>Error Fetching Data...</div>;
    } else {
        content = data.map((user) => {
            return <UsersListItem key={user.id} user={user} />;
        });
    }

    return (
        <div>
            <div className="flex flex-row justify-between m-3 items-center">
                <h1 className="m-2 text-xl">Users</h1>
                <Button loading={isCreatingUser} onClick={handleUserAdd}>+ Add User</Button>
                {isCreatingUserError && 'Error Creating User...'}
            </div>
            {content}
        </div>
    );
}

export default UsersList;