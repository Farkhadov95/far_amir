import {
  Button,
  ModalOverlay,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalCloseButton,
  useDisclosure,
  Icon,
} from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import { FcSettings } from "react-icons/fc";

function SettingModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        onClick={onOpen}
        variant="unstyled"
        height="fit-content"
        width="fit-content"
      >
        <FcSettings />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Settings</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ColorModeSwitch />
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default SettingModal;
