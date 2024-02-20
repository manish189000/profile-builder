import { Alert, AlertIcon, Stack } from "@chakra-ui/react";

// eslint-disable-next-line react/prop-types
const ErrorDialogBox = ({ errorVisible }) => {
  return (
    errorVisible && (
      <Stack
        spacing={3}
        className="absolute font-inter rounded left-[50%] -translate-x-[50%]"
      >
        <Alert status="error">
          <AlertIcon />
          There was an error processing your request
        </Alert>
      </Stack>
    )
  );
};

export default ErrorDialogBox;
