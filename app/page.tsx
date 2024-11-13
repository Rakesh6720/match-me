import { auth, signOut } from "@/auth";
import { Button } from "@nextui-org/react";
import React from "react";
import { FaRegSmile } from "react-icons/fa";

const HomePage = async () => {
  const session = await auth();
  return (
    <div>
      <h3 className="text-2xl font-semibold">User session data:</h3>
      {session ? (
        <div>
          <pre>{JSON.stringify(session, null, 2)}</pre>
          <form
            action={() => {
              "use server";
              signOut;
            }}
          >
            <Button
              type="submit"
              color="primary"
              variant="bordered"
              startContent={<FaRegSmile size={20} />}
            >
              Sign Out
            </Button>
          </form>
        </div>
      ) : (
        <p />
      )}
    </div>
  );
};

export default HomePage;
