"use client"; // Error components must be Client Components

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@nextui-org/react";
import { useEffect } from "react";
import { BiSolidError } from "react-icons/bi";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex items-center justify-center vertical-center">
      <Card className="w-2/5 mx-auto">
        <CardHeader className="flex flex-row items-center justify-center">
          <div className="flex flex-col gap-2 items-center text-secondary">
            <BiSolidError size={30} />
            <h1 className="text-3xl font-semibold">Error</h1>
          </div>
        </CardHeader>
        <CardBody>
          <div className="flex justify-center text-danger">
            {error.message} I
          </div>
        </CardBody>
        <CardFooter className="flex justify-center">
          <Button onClick={() => reset()} color="secondary" variant="bordered">
            Try again
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
