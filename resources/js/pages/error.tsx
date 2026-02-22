import { Container } from "@narsil-ui/components/container";
import { Heading } from "@narsil-ui/components/heading";

type ErrorProps = {
  description: string;
  title: string;
};

function Error({ description, title }: ErrorProps) {
  return (
    <Container className="h-[inherit] min-h-[inherit] justify-center" variant="sm">
      <Heading className="text-center" level="h1" variant="h3">
        {title}
      </Heading>
      <p className="text-center text-base">{description}</p>
    </Container>
  );
}

export default Error;
