import React from "react";
import Hero from "../../components/Hero";
import Badge from "../../components/Badge";
import BadgeForm from "../../components/BadgeForm";
import PageError from "../../components/PageError";
import Loader from "../../components/Loader";
import Footer from "../../components/Footer";
import "./NewBadge.css";
import api from "../../libs/fetch";

class NewBadge extends React.Component {
  state = {
    loading: false,
    error: null,
    form: {
      header_img_url: "",
      profile_picture_url: "",
      name: "",
      age: "",
      city: "",
      followers: "",
      likes: "",
      post: "",
      posts: "",
    },
  };

  handleChange = (event) => {
    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.value,
      },
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    this.setState({ loading: true, error: null });

    try {
      await api.badges.create(this.state.form);
      this.setState({ loading: false, error: null });
      this.props.history.push("/badges");
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading) {
      return <Loader></Loader>;
    }

    if (this.state.error) {
      return <PageError error={this.state.error.message}></PageError>;
    }

    return (
      <React.Fragment>
        <Hero h={"15vh"}></Hero>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                header_img_url={
                  this.state.form.header_img_url ||
                  "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                }
                profile_picture_url={
                  this.state.form.profile_picture_url ||
                  "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/default-avatar.png"
                }
                name={this.state.form.name || "Name LastName"}
                age={this.state.form.age || "XX"}
                city={this.state.form.city || "State Country"}
                followers={this.state.form.followers || "0"}
                likes={this.state.form.likes || "0"}
                post={this.state.form.post || "0"}
              ></Badge>
            </div>
            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
              ></BadgeForm>
            </div>
          </div>
        </div>
        <Footer s={{ bottom: 0 }}></Footer>
      </React.Fragment>
    );
  }
}

export default NewBadge;
