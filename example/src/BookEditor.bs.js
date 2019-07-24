// Generated by BUCKLESCRIPT VERSION 6.0.3, PLEASE EDIT WITH CARE

import * as Block from "bs-platform/lib/es6/block.js";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as Caml_option from "bs-platform/lib/es6/caml_option.js";
import * as ReasonRelay from "reason-relay/src/ReasonRelay.bs.js";
import * as ShowForDuration from "./ShowForDuration.bs.js";
import * as BookEditor_book_graphql from "./__generated__/BookEditor_book_graphql.bs.js";
import * as BookEditorDeleteMutation_graphql from "./__generated__/BookEditorDeleteMutation_graphql.bs.js";
import * as BookEditorUpdateMutation_graphql from "./__generated__/BookEditorUpdateMutation_graphql.bs.js";

var UseFragment = ReasonRelay.MakeUseFragment(/* module */[/* fragmentSpec */BookEditor_book_graphql.node]);

function use(fRef) {
  return Curry._1(UseFragment[/* use */0], fRef);
}

var BookFragment = /* module */[
  /* Operation */0,
  /* UseFragment */UseFragment,
  /* use */use
];

var Mutation = ReasonRelay.MakeCommitMutation(/* module */[/* node */BookEditorUpdateMutation_graphql.node]);

var UseMutation = ReasonRelay.MakeUseMutation(/* module */[/* node */BookEditorUpdateMutation_graphql.node]);

var use$1 = UseMutation[/* use */0];

var commitMutation = Mutation[/* commitMutation */0];

var UpdateMutation = /* module */[
  /* Operation */0,
  /* Mutation */Mutation,
  /* UseMutation */UseMutation,
  /* use */use$1,
  /* commitMutation */commitMutation
];

var Mutation$1 = ReasonRelay.MakeCommitMutation(/* module */[/* node */BookEditorDeleteMutation_graphql.node]);

var UseMutation$1 = ReasonRelay.MakeUseMutation(/* module */[/* node */BookEditorDeleteMutation_graphql.node]);

var use$2 = UseMutation$1[/* use */0];

var commitMutation$1 = Mutation$1[/* commitMutation */0];

var DeleteMutation = /* module */[
  /* Operation */0,
  /* Mutation */Mutation$1,
  /* UseMutation */UseMutation$1,
  /* use */use$2,
  /* commitMutation */commitMutation$1
];

function reducer(state, action) {
  if (action.tag) {
    return /* record */[
            /* title */state[/* title */0],
            /* author */action[0]
          ];
  } else {
    return /* record */[
            /* title */action[0],
            /* author */state[/* author */1]
          ];
  }
}

function BookEditor(Props) {
  var bookRef = Props.book;
  var book = Curry._1(UseFragment[/* use */0], bookRef);
  var match = React.useReducer(reducer, /* record */[
        /* title */book.title,
        /* author */book.author
      ]);
  var dispatch = match[1];
  var state = match[0];
  var match$1 = Curry._1(use$1, /* () */0);
  var mutationState = match$1[1];
  var updateBook = match$1[0];
  var tmp;
  if (typeof mutationState === "number") {
    tmp = "Saving...";
  } else if (mutationState.tag) {
    var res = mutationState[0];
    if (res !== undefined) {
      var match$2 = Caml_option.valFromOption(res).updateBook.book;
      tmp = (match$2 == null) ? React.createElement(ShowForDuration.make, {
              duration: 2000,
              children: "Ooops, something went wrong."
            }) : React.createElement(ShowForDuration.make, {
              duration: 2000,
              children: "Saved!"
            });
    } else {
      tmp = React.createElement(ShowForDuration.make, {
            duration: 2000,
            children: "No data Ooops, something went wrong."
          });
    }
  } else {
    tmp = React.createElement(ShowForDuration.make, {
          duration: 2000,
          children: "ERROR: Ooops, something went wrong."
        });
  }
  return React.createElement("p", undefined, React.createElement("p", undefined, React.createElement("input", {
                      type: "text",
                      value: state[/* title */0],
                      onChange: (function (e) {
                          return Curry._1(dispatch, /* SetTitle */Block.__(0, [e.currentTarget.value]));
                        })
                    })), React.createElement("p", undefined, React.createElement("input", {
                      type: "text",
                      value: state[/* author */1],
                      onChange: (function (e) {
                          return Curry._1(dispatch, /* SetAuthor */Block.__(1, [e.currentTarget.value]));
                        })
                    })), React.createElement("p", undefined, React.createElement("button", {
                      onClick: (function (param) {
                          Curry._5(updateBook, {
                                  input: {
                                    clientMutationId: undefined,
                                    id: book.id,
                                    title: state[/* title */0],
                                    author: state[/* author */1],
                                    status: Caml_option.nullable_to_opt(book.status)
                                  }
                                }, undefined, undefined, undefined, /* () */0).then((function (res) {
                                  if (res.tag) {
                                    return Promise.resolve((console.log("Error...", res[0]), /* () */0));
                                  } else {
                                    return Promise.resolve((console.log("Success!", res[0]), /* () */0));
                                  }
                                }));
                          return /* () */0;
                        })
                    }, "Save"), tmp));
}

var make = BookEditor;

export {
  BookFragment ,
  UpdateMutation ,
  DeleteMutation ,
  reducer ,
  make ,
  
}
/* UseFragment Not a pure module */