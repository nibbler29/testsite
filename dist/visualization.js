$(document).ready( function () {
const nodeFilterSelector = document.getElementById("nodeFilterSelect");
const edgeFilters = document.getElementsByName("edgesFilter");

function startNetwork(data) {
  const container = document.getElementById("mynetwork");
  const options = {
    edges: {
//           length: 400 // Longer edges between nodes.
    },
    physics: {
    // Even though it's disabled the options still apply to network.stabilize().
      enabled: true,
      solver: "repulsion",
      repulsion: {
        nodeDistance: 200 // Put more distance between the nodes.
      }
    }
  };
  new vis.Network(container, data, options);
//  network.stabilize();
}
/**
 * In this example we do not mutate nodes or edges source data.
 */
var nodes = new vis.DataSet([

{ 'id': '001', 'size': 170, 'label': '*BeVaccination**\n(Profile)\nStatus: active\n', 'color': '#CFCFCF', 'shape': 'box', 'font': { 'align': 'left', 'multi':'md' } },
{ 'id': '002', 'size': 170, 'label': '*VaccinationConfirmationStatus**\n(CodeSystem)\nStatus: draft\n', 'color': '#CFFFFF', 'shape': 'box', 'font': { 'align': 'left', 'multi':'md' } },
{ 'id': '003', 'size': 170, 'label': '*VaccinationStatusReason**\n(ValueSet)\nStatus: draft\n', 'color': '#CFFFCF', 'shape': 'box', 'font': { 'align': 'left', 'multi':'md' } },
{ 'id': '004', 'size': 170, 'label': '*VaccinationStatusReason**\n(CodeSystem)\nStatus: draft\n', 'color': '#CFFFFF', 'shape': 'box', 'font': { 'align': 'left', 'multi':'md' } },
{ 'id': '005', 'size': 170, 'label': '*VaccineAdministrationRoute**\n(ValueSet)\nStatus: draft\n', 'color': '#CFFFCF', 'shape': 'box', 'font': { 'align': 'left', 'multi':'md' } },
{ 'id': '006', 'size': 170, 'label': '*VaccineAdministrationRoute**\n(CodeSystem)\nStatus: draft\n', 'color': '#CFFFFF', 'shape': 'box', 'font': { 'align': 'left', 'multi':'md' } },
{ 'id': '007', 'size': 170, 'label': '*AdministeredProduct**\n(Extension)\nStatus: active\n', 'color': '#FFCFCF', 'shape': 'box', 'font': { 'align': 'left', 'multi':'md' } },
{ 'id': '008', 'size': 170, 'label': '*VaccinationOriginalOrder**\n(Extension)\nStatus: active\n', 'color': '#FFCFCF', 'shape': 'box', 'font': { 'align': 'left', 'multi':'md' } },
{ 'id': '009', 'size': 170, 'label': '*VaccinationRecorder**\n(Extension)\nStatus: active\n', 'color': '#FFCFCF', 'shape': 'box', 'font': { 'align': 'left', 'multi':'md' } },
{ 'id': '010', 'size': 170, 'label': '*VaccineConfirmationStatus**\n(Extension)\nStatus: active\n', 'color': '#FFCFCF', 'shape': 'box', 'font': { 'align': 'left', 'multi':'md' } },
{ 'id': '011', 'size': 170, 'label': '*CNKCode**\n(NamingSystem)\nStatus: active\n', 'color': '#FFCFFF', 'shape': 'box', 'font': { 'align': 'left', 'multi':'md' } },
{ 'id': '012', 'size': 170, 'label': '*NIHDIOrganization**\n(NamingSystem)\nStatus: active\n', 'color': '#FFCFFF', 'shape': 'box', 'font': { 'align': 'left', 'multi':'md' } },
{ 'id': '013', 'size': 170, 'label': '*NIHDIProfessional**\n(NamingSystem)\nStatus: active\n', 'color': '#FFCFFF', 'shape': 'box', 'font': { 'align': 'left', 'multi':'md' } },
{ 'id': '014', 'size': 170, 'label': '*ONEVaccinationID**\n(NamingSystem)\nStatus: active\n', 'color': '#FFCFFF', 'shape': 'box', 'font': { 'align': 'left', 'multi':'md' } },
{ 'id': '015', 'size': 170, 'label': '*ProductManufacturer**\n(NamingSystem)\nStatus: active\n', 'color': '#FFCFFF', 'shape': 'box', 'font': { 'align': 'left', 'multi':'md' } },
{ 'id': '016', 'size': 170, 'label': '*BeVaccinationLocation**\n(Extension)\nStatus: active\n', 'color': '#FFCFCF', 'shape': 'box', 'font': { 'align': 'left', 'multi':'md' } },
{ 'id': '017', 'size': 170, 'label': '*CareLocation**\n(ValueSet)\nStatus: draft\n', 'color': '#CFFFCF', 'shape': 'box', 'font': { 'align': 'left', 'multi':'md' } },
{ 'id': '018', 'size': 170, 'label': '*CareLocation**\n(CodeSystem)\nStatus: draft\n', 'color': '#CFFFFF', 'shape': 'box', 'font': { 'align': 'left', 'multi':'md' } },
{ 'id': '019', 'size': 170, 'label': '*VaccinationConfirmationStatus**\n(ValueSet)\nStatus: draft\n', 'color': '#CFFFCF', 'shape': 'box', 'font': { 'align': 'left', 'multi':'md' } },


]);

var edges = new vis.DataSet([

{  from: '001',to: '008', relation:'extension', label: 'Extension',arrows: {'to':{ enabled: true,'type':'curve'} },color: { color: '#400000' }},
{  from: '001',to: '007', relation:'extension', label: 'Extension',arrows: {'to':{ enabled: true,'type':'curve'} },color: { color: '#400000' }},
{  from: '001',to: '010', relation:'extension', label: 'Extension',arrows: {'to':{ enabled: true,'type':'curve'} },color: { color: '#400000' }},
{  from: '001',to: '009', relation:'extension', label: 'Extension',arrows: {'to':{ enabled: true,'type':'curve'} },color: { color: '#400000' }},
{  from: '001',to: '003', relation:'binding_req', label: 'Bound (Req)',arrows: {'to':{ enabled: true,'type':'arrow'} },color: { color: '#000000' }},
{  from: '003',to: '004', relation:'values_from', label: 'Values From',arrows: {'to':{ enabled: true,'type':'crow'} },color: { color: '#404000' }},
{  from: '001',to: '005', relation:'binding_req', label: 'Bound (Req)',arrows: {'to':{ enabled: true,'type':'arrow'} },color: { color: '#000000' }},
{  from: '005',to: '006', relation:'values_from', label: 'Values From',arrows: {'to':{ enabled: true,'type':'crow'} },color: { color: '#404000' }},
{  from: '007',to: '011', relation:'system', label: 'System',arrows: {'to':{ enabled: true,'type':'diamond'} },color: { color: '#404040' }},
{  from: '007',to: '015', relation:'system', label: 'System',arrows: {'to':{ enabled: true,'type':'diamond'} },color: { color: '#404040' }},
{  from: '001',to: '012', relation:'system', label: 'System',arrows: {'to':{ enabled: true,'type':'diamond'} },color: { color: '#404040' }},
{  from: '001',to: '013', relation:'system', label: 'System',arrows: {'to':{ enabled: true,'type':'diamond'} },color: { color: '#404040' }},
{  from: '009',to: '012', relation:'system', label: 'System',arrows: {'to':{ enabled: true,'type':'diamond'} },color: { color: '#404040' }},
{  from: '009',to: '013', relation:'system', label: 'System',arrows: {'to':{ enabled: true,'type':'diamond'} },color: { color: '#404040' }},
{  from: '001',to: '014', relation:'system', label: 'System',arrows: {'to':{ enabled: true,'type':'diamond'} },color: { color: '#404040' }},
{  from: '001',to: '016', relation:'extension', label: 'Extension',arrows: {'to':{ enabled: true,'type':'curve'} },color: { color: '#400000' }},
{  from: '016',to: '017', relation:'binding_req', label: 'Bound (Req)',arrows: {'to':{ enabled: true,'type':'arrow'} },color: { color: '#000000' }},
{  from: '017',to: '018', relation:'values_from', label: 'Values From',arrows: {'to':{ enabled: true,'type':'crow'} },color: { color: '#404000' }},
{  from: '010',to: '019', relation:'binding_req', label: 'Bound (Req)',arrows: {'to':{ enabled: true,'type':'arrow'} },color: { color: '#000000' }},
{  from: '019',to: '002', relation:'values_from', label: 'Values From',arrows: {'to':{ enabled: true,'type':'crow'} },color: { color: '#404000' }},

]);
var edges = [
  { 'from': "P1", 'to': "P2", 'arrows': 'to', label: 'Active ingredient of', 'physics': true, 'smooth': { 'type': 'cubicBezier' } },
  { 'from': "P1", 'to': "P3", 'arrows': 'to', label: 'Active ingredient of', 'physics': true, 'smooth': { 'type': 'cubicBezier' } },
  { 'from': "P1", 'to': "P4", 'arrows': 'to', label: 'Active ingredient of', 'physics': true, 'smooth': { 'type': 'cubicBezier' } },
  { 'from': "P1", 'to': "6605", 'arrows': 'to', label: 'Active ingredient of', 'physics': true, 'smooth': { 'type': 'cubicBezier' } },
  { 'from': "P1", 'to': "P8", 'arrows': 'to', label: 'Active ingredient of', 'physics': true, 'smooth': { 'type': 'cubicBezier' } },

  { 'from': "P4", 'to': "P5", 'arrows': 'to', label: 'Available as', 'physics': true, 'smooth': { 'type': 'cubicBezier' } },
  { 'from': "P4", 'to': "P6", 'arrows': 'to', label: 'Available as', 'physics': true, 'smooth': { 'type': 'cubicBezier' } },
  { 'from': "P2", 'to': "P7", 'arrows': 'to', label: 'Available as', 'physics': true, 'smooth': { 'type': 'cubicBezier' } }

];

/**
 * filter values are updated in the outer scope.
 * in order to apply filters to new values, DataView.refresh() should be called
 */
let nodeFilterValue = "";
const edgesFilterValues = {
  binding_req: true,
  binding_req: true,
  binding_ext: true,
  binding_pref: true,
  binding_exm: true,
  extension: true,
  contains: true,
  values_from: true,
  system: true,



};

/*
filter function should return true or false
based on whether item in DataView satisfies a given condition.
*/
const nodesFilter = (node) => {
  if (nodeFilterValue === "") {
    return true;
  }
  switch (nodeFilterValue) {
    case "kid":
      return node.age === "kid";
    case "adult":
      return node.age === "adult";
    case "male":
      return node.gender === "male";
    case "female":
      return node.gender === "female";
    default:
      return true;
  }
};

const edgesFilter = (edge) => {
  return edgesFilterValues[edge.relation];
};

const nodesView = new vis.DataView(nodes, { filter: nodesFilter });
const edgesView = new vis.DataView(edges, { filter: edgesFilter });

nodeFilterSelector.addEventListener("change", (e) => {
  // set new value to filter variable
  nodeFilterValue = e.target.value;
  /*
  refresh DataView,
  so that its filter function is re-calculated with the new variable
*/
  nodesView.refresh();
});

edgeFilters.forEach((filter) =>
  filter.addEventListener("change", (e) => {
    const { value, checked } = e.target;
    edgesFilterValues[value] = checked;
    edgesView.refresh();
  })
);

startNetwork({ nodes: nodesView, edges: edgesView });
});