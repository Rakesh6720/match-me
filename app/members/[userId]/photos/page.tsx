import { getMemberPhotosByUserId } from "@/app/actions/memberActions";
import { Card, CardBody, CardHeader, Divider, Image } from "@nextui-org/react";
import React from "react";

const PhotosPage = async ({ params }: { params: { userId: string } }) => {
  const photos = await getMemberPhotosByUserId(params.userId);
  return (
    <Card>
      <CardHeader className="text-2xl font-semibold text-secondary">
        Photos
      </CardHeader>
      <Divider />
      <CardBody>
        <div className="grid grid-cols-5 gap-3">
          {photos &&
            photos?.map((photo) => (
              <div key={photo.id}>
                <Image
                  src={photo.url}
                  alt="Image of member"
                  className="aspect-square object-cover"
                />
              </div>
            ))}
        </div>
      </CardBody>
    </Card>
  );
};

export default PhotosPage;
