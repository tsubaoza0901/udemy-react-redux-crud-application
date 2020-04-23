import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

import { postEvent } from '../actions';

class EventsNew extends React.Component {
  // 追加
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  renderField(field) {
    const {
      input,
      label,
      type,
      meta: { touched, error },
    } = field;

    return (
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched && error && <span>{error}</span>}
      </div>
    );
  }
  // イベント発火（サブミットボタンが押された）時の処理設定 ※非同期処理のためasyncを使用
  async onSubmit(values) {
    await this.props.postEvent(values);
    this.props.history.push('/'); // トップページの履歴をpush
  }
  render() {
    const { handleSubmit } = this.props; // 追加
    return (
      // サブミットボタンが押されたらイベント発火
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div>
          <Field
            label="Title"
            name="title"
            type="text"
            component={this.renderField}
          />
        </div>
        <div>
          <Field
            label="Body"
            name="body"
            type="text"
            component={this.renderField}
          />
        </div>
        <div>
          <input type="submit" value="Submit" disabled={false} />
          <Link to="/">Cansel</Link>
        </div>
      </form>
    );
  }
}

const validate = (values) => {
  const errors = {};

  // バリデーションの設定
  if (!values.title) errors.title = 'Enter a title, please.'; // Titleが空の場合
  if (!values.body) errors.body = 'Enter a body, please.'; // Bodyが空の場合

  return errors;
};

const mapDispatchToProps = { postEvent };

export default connect(
  null,
  mapDispatchToProps // 修正
)(reduxForm({ validate, form: 'eventNewForm' })(EventsNew));
