/*
 *
 * ExperimentList actions
 *
 */

import {
  GET_DATA,
  LOAD_EXPERIMENT_DATA,
  LOAD_EXPERIMENT_DATA_SUCCESS,
  LOAD_EXPERIMENT_DATA_ERROR,
  SET_EXPERIMENT_COLUMNS,
} from './constants';

export function getDataAction() {
  return {
    type: GET_DATA,
  };
}

export function loadExperimentAction(projectId) {
  return {
    type: LOAD_EXPERIMENT_DATA,
    projectId,
  };
}

export function loadExperimentSuccessAction(experiments) {
  return {
    type: LOAD_EXPERIMENT_DATA_SUCCESS,
    experiments,
  };
}

export function loadExperimentErrorAction(error) {
  return {
    type: LOAD_EXPERIMENT_DATA_ERROR,
    error,
  };
}

export function setExperimentColumnAction(
  columnList,
  metricColumnList,
  projectId,
) {
  return {
    type: SET_EXPERIMENT_COLUMNS,
    columnList,
    metricColumnList,
    projectId,
  };
}
