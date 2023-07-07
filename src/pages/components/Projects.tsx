import {
  makeStyles,
  shorthands,
  Button,
  Caption1,
  tokens,
  Text,
  Card,
  CardHeader,
  CardPreview,
  CardProps,
} from "@fluentui/react-components";

import { MoreHorizontal20Filled } from "@fluentui/react-icons";

const resolveAsset = (asset: string) => {
  const ASSET_URL =
    "https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/assets/";

  return `${ASSET_URL}${asset}`;
};

export default function Projects() {
  return (
    <>
      <div className="grid grid-cols-3 gap-4 my-16">
        <Card className="transform transition-all duration-300 hover:scale-105 cursor-pointer bg-cyan-500">
          <CardPreview
            logo={<img src={resolveAsset("logo3.svg")} alt="Figma app logo" />}
          >
            <img src={resolveAsset("office1.png")} alt="Presentation Preview" />
          </CardPreview>

          <CardHeader
            header={<Text weight="semibold">iOS App Prototype</Text>}
            description={<Caption1>You created 53m ago</Caption1>}
            action={
              <Button
                appearance="transparent"
                icon={<MoreHorizontal20Filled />}
                aria-label="More actions"
              />
            }
          />
        </Card>
        <Card className="transform transition-all duration-300 hover:scale-105 cursor-pointer">
          <CardPreview
            logo={<img src={resolveAsset("logo3.svg")} alt="Figma app logo" />}
          >
            <img src={resolveAsset("office1.png")} alt="Presentation Preview" />
          </CardPreview>

          <CardHeader
            header={<Text weight="semibold">iOS App Prototype</Text>}
            description={<Caption1>You created 53m ago</Caption1>}
            action={
              <Button
                appearance="transparent"
                icon={<MoreHorizontal20Filled />}
                aria-label="More actions"
              />
            }
          />
        </Card>
        <Card className="transform transition-all duration-300 hover:scale-105 cursor-pointer">
          <CardPreview
            logo={<img src={resolveAsset("logo3.svg")} alt="Figma app logo" />}
          >
            <img src={resolveAsset("office1.png")} alt="Presentation Preview" />
          </CardPreview>

          <CardHeader
            header={<Text weight="semibold">iOS App Prototype</Text>}
            description={<Caption1>You created 53m ago</Caption1>}
            action={
              <Button
                appearance="transparent"
                icon={<MoreHorizontal20Filled />}
                aria-label="More actions"
              />
            }
          />
        </Card>
      </div>
    </>
  );
}
