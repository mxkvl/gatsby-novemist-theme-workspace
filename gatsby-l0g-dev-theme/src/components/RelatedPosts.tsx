import React from "react";
import { icons } from "../icons";
import { PostEdge } from "../types";
import { Container } from "./Container";
import { FullWidthWrapper } from "./FullWidthWrapper";
import { Icon } from "./Icon";
import { PostsList } from "./PostsList";

interface RelatedPostsProps {
  posts: PostEdge[];
}

export const RelatedPosts = ({ posts }: RelatedPostsProps) => {
  return (
    <FullWidthWrapper isColorish>
      <Container>
        <h2 className="monospace text-center bold">
          See also <Icon src={icons.emojiBooks} widthSize="28px" />
        </h2>
        <br />
        <div
          style={{
            width: "75%",
            margin: "0 auto",
          }}
        >
          <PostsList posts={posts} gridView="row" />
        </div>
      </Container>
    </FullWidthWrapper>
  );
};
