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
      <div className="grid grid-cols-3 gap-4 mt-16">
        <a href="https://ukwendamail.vercel.app/">
          <Card className="transform transition-all duration-300 hover:scale-105 cursor-pointer bg-cyan-500">
            <CardPreview>
              <img src="/project/project-uk.png" alt="Presentation Preview" />
            </CardPreview>

            <CardHeader
              header={<Text weight="semibold">Ukwenda Mail</Text>}
              description={<Caption1>An email design web app</Caption1>}
              action={
                <Button
                  appearance="transparent"
                  icon={<MoreHorizontal20Filled />}
                  aria-label="More actions"
                />
              }
            />
          </Card>
        </a>
        <a href="https://linkinmybio.vercel.app/">
          <Card className="transform transition-all duration-300 hover:scale-105 cursor-pointer">
            <CardPreview>
              <img src="/project/project-link.png" alt="Presentation Preview" />
            </CardPreview>

            <CardHeader
              header={<Text weight="semibold">Link in my bio</Text>}
              description={
                <Caption1>
                  An app that put a blogs links all in one place for its
                  readers.
                </Caption1>
              }
              action={
                <Button
                  appearance="transparent"
                  icon={<MoreHorizontal20Filled />}
                  aria-label="More actions"
                />
              }
            />
          </Card>
        </a>
        <a href="https://github.com/Martin-Wanangwa-Nyirenda/Rocks-Radiology-Information-System">
          <Card className="transform transition-all duration-300 hover:scale-105 cursor-pointer">
            <CardPreview>
              <img
                src="/project/project-rocks.png"
                alt="Presentation Preview"
              />
            </CardPreview>

            <CardHeader
              header={
                <Text weight="semibold">Rock Radiology Information System</Text>
              }
              description={
                <Caption1>
                  A Radiology Information System that is integrated with DCM4CHE
                </Caption1>
              }
              action={
                <Button
                  appearance="transparent"
                  icon={<MoreHorizontal20Filled />}
                  aria-label="More actions"
                />
              }
            />
          </Card>
        </a>
      </div>
    </>
  );
}
