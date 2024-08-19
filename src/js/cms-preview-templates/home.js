import React from "react";
import Jumbotron from "./components/jumbotron";

export default class HomePreview extends React.Component {
  render() {
    const { entry, getAsset } = this.props;
    const image = getAsset(entry.getIn(["data", "image"]));

    return (
      <div>
        <Jumbotron
          image={image}
          title={entry.getIn(["data", "title"])}
          subtitle={entry.getIn(["data", "subtitle"])}
        />

        <div className="bg-grey-1 pv4">
          <div className="flex-l mhn1-l ph3 center mw7">
            <h2 className="f2 b lh-title mb2 w-40-l">
              {entry.getIn(["data", "blurb", "heading"])}
            </h2>
            <p className="w-60-l mb0">{entry.getIn(["data", "blurb", "text"])}</p>
          </div>
        </div>

        <div className="bg-off-white pv4">
          <div className="ph3 mw7 center">
            <h2 className="f2 b lh-title mb2">
              {entry.getIn(["data", "intro", "heading"])}
            </h2>
            <p className="mb4 mw6">
              {entry.getIn(["data", "intro", "text"])}
            </p>

            <div className="flex-ns mhn2-ns mb3">
              {(entry.getIn(["data", "featured_posts"]) || []).map(
                (post, i) => (
                  <div className="ph2-ns w-50-ns" key={i}>
                    <img
                      src={getAsset(post.get("image"))}
                      alt={post.get("title")}
                      className="center db mb3"
                      style={{ width: "240px" }}
                    />
                    <h3>{post.get("title")}</h3>
                    <p>{post.get("excerpt")}</p>
                    <a href={post.get("url")} className="link blue">
                      Read more
                    </a>
                  </div>
                )
              )}
            </div>

            <div className="tc">
              <a href="/blog" className="btn raise">
                View all blog posts
              </a>
            </div>
          </div>
        </div>

        <div className="bg-grey-1 pv4">
          <div className="ph3 mw7 center">
            <div className="flex-l mhn2-l">
              <div className="w-40-l ph2-l">
                <h2 className="f2 b lh-title mb2">
                  {entry.getIn(["data", "about", "heading"])}
                </h2>
                <p>{entry.getIn(["data", "about", "text"])}</p>
              </div>
              <div className="w-60-l ph2-l">
                <img
                  src={getAsset(entry.getIn(["data", "about", "image"]))}
                  alt="About IndoreCabs"
                  className="mb3"
                />
              </div>
            </div>

            <div className="tc">
              <a href="/about" className="btn raise">
                Learn more about us
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
