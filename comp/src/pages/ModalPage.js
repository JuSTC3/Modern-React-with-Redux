import { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    const actionBar = (
        <div>
            <Button onClick={handleClose} primary>I Accept</Button>
        </div>
    );

    const modal = (
        <Modal onClose={handleClose} actionBar={actionBar}>
            <p>
                Here is an important agreement for you to accept
            </p>
        </Modal>
    );

    return (
        <div>
            <Button onClick={handleClick}>Open Modal</Button>
            {showModal && modal}
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras luctus quam feugiat convallis efficitur. Ut vel pretium arcu, ut commodo orci. Maecenas in vehicula metus. Curabitur finibus velit nisl, interdum congue erat aliquet id. Nunc rhoncus sit amet quam nec condimentum. Maecenas efficitur, metus at congue tempus, massa sapien pharetra ipsum, at cursus mauris nibh id ipsum. Sed quis est non leo viverra bibendum ut vel nunc. Phasellus id scelerisque orci, eu interdum mauris. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer vel erat purus. Sed vestibulum massa ac sapien consequat, in pretium turpis commodo.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras luctus quam feugiat convallis efficitur. Ut vel pretium arcu, ut commodo orci. Maecenas in vehicula metus. Curabitur finibus velit nisl, interdum congue erat aliquet id. Nunc rhoncus sit amet quam nec condimentum. Maecenas efficitur, metus at congue tempus, massa sapien pharetra ipsum, at cursus mauris nibh id ipsum. Sed quis est non leo viverra bibendum ut vel nunc. Phasellus id scelerisque orci, eu interdum mauris. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer vel erat purus. Sed vestibulum massa ac sapien consequat, in pretium turpis commodo.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras luctus quam feugiat convallis efficitur. Ut vel pretium arcu, ut commodo orci. Maecenas in vehicula metus. Curabitur finibus velit nisl, interdum congue erat aliquet id. Nunc rhoncus sit amet quam nec condimentum. Maecenas efficitur, metus at congue tempus, massa sapien pharetra ipsum, at cursus mauris nibh id ipsum. Sed quis est non leo viverra bibendum ut vel nunc. Phasellus id scelerisque orci, eu interdum mauris. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer vel erat purus. Sed vestibulum massa ac sapien consequat, in pretium turpis commodo.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras luctus quam feugiat convallis efficitur. Ut vel pretium arcu, ut commodo orci. Maecenas in vehicula metus. Curabitur finibus velit nisl, interdum congue erat aliquet id. Nunc rhoncus sit amet quam nec condimentum. Maecenas efficitur, metus at congue tempus, massa sapien pharetra ipsum, at cursus mauris nibh id ipsum. Sed quis est non leo viverra bibendum ut vel nunc. Phasellus id scelerisque orci, eu interdum mauris. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer vel erat purus. Sed vestibulum massa ac sapien consequat, in pretium turpis commodo.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras luctus quam feugiat convallis efficitur. Ut vel pretium arcu, ut commodo orci. Maecenas in vehicula metus. Curabitur finibus velit nisl, interdum congue erat aliquet id. Nunc rhoncus sit amet quam nec condimentum. Maecenas efficitur, metus at congue tempus, massa sapien pharetra ipsum, at cursus mauris nibh id ipsum. Sed quis est non leo viverra bibendum ut vel nunc. Phasellus id scelerisque orci, eu interdum mauris. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer vel erat purus. Sed vestibulum massa ac sapien consequat, in pretium turpis commodo.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras luctus quam feugiat convallis efficitur. Ut vel pretium arcu, ut commodo orci. Maecenas in vehicula metus. Curabitur finibus velit nisl, interdum congue erat aliquet id. Nunc rhoncus sit amet quam nec condimentum. Maecenas efficitur, metus at congue tempus, massa sapien pharetra ipsum, at cursus mauris nibh id ipsum. Sed quis est non leo viverra bibendum ut vel nunc. Phasellus id scelerisque orci, eu interdum mauris. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer vel erat purus. Sed vestibulum massa ac sapien consequat, in pretium turpis commodo.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras luctus quam feugiat convallis efficitur. Ut vel pretium arcu, ut commodo orci. Maecenas in vehicula metus. Curabitur finibus velit nisl, interdum congue erat aliquet id. Nunc rhoncus sit amet quam nec condimentum. Maecenas efficitur, metus at congue tempus, massa sapien pharetra ipsum, at cursus mauris nibh id ipsum. Sed quis est non leo viverra bibendum ut vel nunc. Phasellus id scelerisque orci, eu interdum mauris. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer vel erat purus. Sed vestibulum massa ac sapien consequat, in pretium turpis commodo.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras luctus quam feugiat convallis efficitur. Ut vel pretium arcu, ut commodo orci. Maecenas in vehicula metus. Curabitur finibus velit nisl, interdum congue erat aliquet id. Nunc rhoncus sit amet quam nec condimentum. Maecenas efficitur, metus at congue tempus, massa sapien pharetra ipsum, at cursus mauris nibh id ipsum. Sed quis est non leo viverra bibendum ut vel nunc. Phasellus id scelerisque orci, eu interdum mauris. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer vel erat purus. Sed vestibulum massa ac sapien consequat, in pretium turpis commodo.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras luctus quam feugiat convallis efficitur. Ut vel pretium arcu, ut commodo orci. Maecenas in vehicula metus. Curabitur finibus velit nisl, interdum congue erat aliquet id. Nunc rhoncus sit amet quam nec condimentum. Maecenas efficitur, metus at congue tempus, massa sapien pharetra ipsum, at cursus mauris nibh id ipsum. Sed quis est non leo viverra bibendum ut vel nunc. Phasellus id scelerisque orci, eu interdum mauris. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer vel erat purus. Sed vestibulum massa ac sapien consequat, in pretium turpis commodo.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras luctus quam feugiat convallis efficitur. Ut vel pretium arcu, ut commodo orci. Maecenas in vehicula metus. Curabitur finibus velit nisl, interdum congue erat aliquet id. Nunc rhoncus sit amet quam nec condimentum. Maecenas efficitur, metus at congue tempus, massa sapien pharetra ipsum, at cursus mauris nibh id ipsum. Sed quis est non leo viverra bibendum ut vel nunc. Phasellus id scelerisque orci, eu interdum mauris. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer vel erat purus. Sed vestibulum massa ac sapien consequat, in pretium turpis commodo.
            </p>
        </div>
    );
}

export default ModalPage;