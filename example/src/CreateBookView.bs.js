// Generated by BUCKLESCRIPT VERSION 6.0.3, PLEASE EDIT WITH CARE

import * as $$Array from "bs-platform/lib/es6/array.js";
import * as Block from "bs-platform/lib/es6/block.js";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as Caml_option from "bs-platform/lib/es6/caml_option.js";
import * as ReasonRelay from "reason-relay/src/ReasonRelay.bs.js";
import * as CreateBookViewQuery_graphql from "./__generated__/CreateBookViewQuery_graphql.bs.js";
import * as CreateBookViewMutation_graphql from "./__generated__/CreateBookViewMutation_graphql.bs.js";
import * as CreateBookViewExistingBookDisplayer from "./CreateBookViewExistingBookDisplayer.bs.js";

var Mutation = ReasonRelay.MakeCommitMutation(/* module */[/* node */CreateBookViewMutation_graphql.node]);

var UseMutation = ReasonRelay.MakeUseMutation(/* module */[/* node */CreateBookViewMutation_graphql.node]);

var use = UseMutation[/* use */0];

var commitMutation = Mutation[/* commitMutation */0];

var CreateMutation = /* module */[
  /* Operation */0,
  /* Mutation */Mutation,
  /* UseMutation */UseMutation,
  /* use */use,
  /* commitMutation */commitMutation
];

var UseQuery = ReasonRelay.MakeUseQuery(/* module */[/* query */CreateBookViewQuery_graphql.node]);

var use$1 = UseQuery[/* use */0];

function $$fetch(environment, variables) {
  return ReasonRelay.fetchQuery(environment, CreateBookViewQuery_graphql.node, variables);
}

var Query = /* module */[
  /* Operation */0,
  /* UseQuery */UseQuery,
  /* use */use$1,
  /* fetch */$$fetch
];

var initialState = /* record */[
  /* title */"",
  /* author */""
];

function reducer(state, action) {
  if (typeof action === "number") {
    return initialState;
  } else if (action.tag) {
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

function CreateBookView(Props) {
  var match = Curry._1(use, /* () */0);
  var addBook = match[0];
  var query = Curry._3(use$1, /* () */0, /* StoreThenNetwork */1, /* () */0);
  var match$1 = React.useReducer(reducer, initialState);
  var dispatch = match$1[1];
  var state = match$1[0];
  var tmp;
  tmp = typeof query === "number" ? "Loading..." : (
      query.tag ? $$Array.mapi((function (index, book) {
                return React.createElement(CreateBookViewExistingBookDisplayer.make, {
                            book: book,
                            key: String(index)
                          });
              }), query[0].books) : "Oops, something failed!"
    );
  return React.createElement("div", undefined, React.createElement("h1", undefined, "Create book"), React.createElement("p", undefined, React.createElement("strong", undefined, "Title"), React.createElement("p", undefined, React.createElement("input", {
                          type: "text",
                          value: state[/* title */0],
                          onChange: (function (e) {
                              return Curry._1(dispatch, /* SetTitle */Block.__(0, [e.currentTarget.value]));
                            })
                        }))), React.createElement("p", undefined, React.createElement("strong", undefined, "Author"), React.createElement("p", undefined, React.createElement("input", {
                          type: "text",
                          value: state[/* author */1],
                          onChange: (function (e) {
                              return Curry._1(dispatch, /* SetAuthor */Block.__(1, [e.currentTarget.value]));
                            })
                        }))), React.createElement("p", undefined, React.createElement("button", {
                      onClick: (function (param) {
                          Curry._5(addBook, {
                                  input: {
                                    clientMutationId: undefined,
                                    title: state[/* title */0],
                                    author: state[/* author */1]
                                  }
                                }, undefined, undefined, (function (store) {
                                    var mutationRes = ReasonRelay.RecordSourceSelectorProxy[/* getRootField */4]("addBook", store);
                                    var rootNode = ReasonRelay.RecordSourceSelectorProxy[/* getRoot */3](store);
                                    var rootBooks = ReasonRelay.RecordProxy[/* getLinkedRecords */3]("books", undefined, rootNode);
                                    var addedBook = mutationRes !== undefined ? ReasonRelay.RecordProxy[/* getLinkedRecord */2]("book", undefined, Caml_option.valFromOption(mutationRes)) : undefined;
                                    if (rootBooks !== undefined) {
                                      if (addedBook !== undefined) {
                                        ReasonRelay.RecordProxy[/* setLinkedRecords */11]($$Array.append(rootBooks, /* array */[Caml_option.some(Caml_option.valFromOption(addedBook))]), "books", undefined, rootNode);
                                      }
                                      
                                    } else if (addedBook !== undefined) {
                                      ReasonRelay.RecordProxy[/* setLinkedRecords */11](/* array */[Caml_option.some(Caml_option.valFromOption(addedBook))], "books", undefined, rootNode);
                                    }
                                    return /* () */0;
                                  }), /* () */0).then((function (res) {
                                  if (res.tag) {
                                    return Promise.resolve((console.log(res[0]), /* () */0));
                                  } else {
                                    return Promise.resolve((console.log("Yay!"), /* () */0));
                                  }
                                }));
                          return /* () */0;
                        })
                    }, "Save"), React.createElement("p", undefined, typeof match[1] === "number" ? "Saving..." : null)), React.createElement("p", undefined, React.createElement("h3", undefined, "Existing books")), React.createElement("p", undefined, tmp));
}

var make = CreateBookView;

export {
  CreateMutation ,
  Query ,
  initialState ,
  reducer ,
  make ,
  
}
/* Mutation Not a pure module */