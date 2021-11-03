import { Domain, fork, Scope, serialize } from "effector";
import { useMemo } from "react";

let scope: Scope;

function initializeScope(domain: Domain, initialData: any) {
  console.log("initializeScope");
  const _scope = fork(domain, {
    values: {
      ...(scope ? serialize(scope, { onlyChanges: true }) : {}),
      ...initialData
    }
  });

  if (typeof window !== "undefined") {
    scope = _scope;
  }

  return _scope;
}

export function useScope(domain: Domain, initialState: any) {
  return useMemo(() => initializeScope(domain, initialState), [
    domain,
    initialState
  ]);
}
