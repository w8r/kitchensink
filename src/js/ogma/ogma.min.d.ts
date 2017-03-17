export type EasingFunction = ((x: number) => number);
export type AnimationHandler = any;
export type Point = {x: number, y: number};
export type CameraConfig = {x: number, y: number, zoom: number, angle: number};
export type Expression = Array<any>|((elt: Node|Edge) => any);
export type DslOperator = ((operand1: any, operand2: any) => any);
export type DslAggregator = ((nodes: Array<Node>) => any);
export type Id = string|number;
export type NodeId = string|number;
export type EdgeId = string|number;
export type NodeGroupFunction = ((nodes: Array<Node>) => NodeData);
export type EdgeGroupFunction = ((edges: Array<Edge>) => EdgeData);
export type LayoutNodeData = { 
   x: Float32Array, 
   y: Float32Array, 
   size: number, 
   indexes: Uint32Array, 
   ids: Array<NodeId>, 
   pinned: Uint8Array 
 };
export type TaskEvent = { 
            data:      any, 
            isRunning: boolean 
          };
export type TaskOptions = { 
       context:   ((result:any, mainContext:any, ogma:Ogma) => any), 
       isRunning: ((context:any, data:any) => any), 
       update:    ((data:any, context:any) => any), 
       onStart:   (() => any), 
       onUpdate:  ((result:any, context:any, ogma:Ogma, iRunning:boolean) => any), 
       onEnd:     ((result:any, context:any, ogma:Ogma) => any) 
     };
export type Color = string;

export interface Badge {
  color?: Color;
  strokeColor?: Color;
  textColor?: Color;
  content?: string|number;
  font?: string;
  image?: string;
}

export interface BadgeList {
  topLeft?: Badge;
  topRight?: Badge;
  bottomLeft?: Badge;
  bottomRight?: Badge;
}

export interface QualitativeColorStyle {
  variable: string;
  scheme: { [key: string] : string };
}

export interface QuantitativeColorStyle {
  variable: string;
  scheme: Array<Color>;
  stops?: Array<number>;
  transformation?: ((x: number) => number);
}

export interface ShapeStyle {
  variable: string;
  scheme: { [key: string] : string };
}

export interface IconStyle {
  variable: string;
  scheme: { [key: string] : string|Icon };
}

export interface ImageStyle {
  variable: string;
  scheme: { [key: string] : string|Image };
}

export interface SizeStyle {
  variable: string;
  min?: number;
  max?: number;
  bins?: number;
  sizes?: Array<number>;
  stops?: Array<number>;
  transformation?: ((x: number) => number);
}

export interface AllNodeStyles {
  color?: null|QualitativeColorStyle|QuantitativeColorStyle|((node: Node) => Color);
  shape?: null|ShapeStyle|((node: Node) => string);
  icon?: null|IconStyle|((node: Node) => Icon)|string;
  image?: null|IconStyle|((node: Node) => Icon)|string;
  size?: null|SizeStyle|((edge: Edge) => number);
  text?: null|((node: Node) => string);
}

export interface AllEdgeStyles {
  color?: null|QualitativeColorStyle|QuantitativeColorStyle|((edge: Edge) => Color);
  shape?: null|ShapeStyle|((edge: Edge) => string);
  size?: null|SizeStyle|((edge: Edge) => number);
  text?: null|((edge: Edge) => string);
}

export interface Icon {
  font?: string;
  content: string;
  scale?: number;
  color?: Color;
}

export interface Image {
  url: string;
  scale?: number;
  rescale?: boolean;
  duplicate?: boolean;
}

export interface PartitionList {
  kill: (() => void);
}


export interface NodeData {
  badges?: BadgeList;
  x?: number;
  y?: number;
  latitude?: number;
  longitude?: number;
  icon?: Icon;
  image?: Image;
  colors?: Array<Color>;
  pinned?: boolean;
  size?: number;
  id: Id;
  data?: any;
  halo?: boolean;
  outline?: boolean;
  active?: boolean;
  shape?: string;
  color?: Color;
  text?: string;
}

export interface EdgeData {
  source: Id;
  target: Id;
  size?: number;
  id: Id;
  data?: any;
  halo?: boolean;
  outline?: boolean;
  active?: boolean;
  shape?: string;
  color?: Color;
  text?: string;
}

export interface Node {
  badges?: BadgeList;
  x?: number;
  y?: number;
  latitude?: number;
  longitude?: number;
  icon?: Icon;
  image?: Image;
  colors?: Array<Color>;
  pinned?: boolean;
  size?: number;
  id: Id;
  data?: any;
  halo?: boolean;
  outline?: boolean;
  active?: boolean;
  shape?: string;
  color?: Color;
  text?: string;
  parent: Node|null;
  children: Array<Node>|null;
  degree: number;
  inDegree: number;
  outDegree: number;
}

export interface Edge {
  source: Id;
  target: Id;
  size?: number;
  id: Id;
  data?: any;
  halo?: boolean;
  outline?: boolean;
  active?: boolean;
  shape?: string;
  color?: Color;
  text?: string;
  parent: Edge|null;
  children: Array<Edge>|null;
}

export interface Animations {
  play(func: EasingFunction, options?: {duration?: number, easing?: EasingFunction|string, callback?: (() => void), startAfter?: number}): AnimationHandler;
  end(animationObject: AnimationHandler, callCallback?: boolean): void;
  addEasingFunction(name: string, func: EasingFunction): void;
  getEasingFunction(name: string): EasingFunction|null;
}

export interface Badges {
}

export interface Brand {
  set(html: string, className?: string): void;
  remove(): void;
}

export interface Camera {
  x: number;
  y: number;
  zoom: number;
  angle: number;

  setCenter(x: number, y: number, options?: {duration?: number, callback?: (() => void), easing?: string, noEndOfAnimation?: boolean}): Camera;
  move(offsetX: number, offsetY: number, options?: {duration?: number, callback?: (() => void), easing?: string, noEndOfAnimation?: boolean, screenCoordinates?: boolean}): Camera;
  setZoom(zoom: number, options?: {duration?: number, callback?: (() => void), easing?: string, refX?: number, refY?: number, noEndOfAnimation?: boolean}): Camera;
  zoomIn(options?: {duration?: number, callback?: (() => void), easing?: string, zoomModifier?: number, refX?: number, refY?: number, noEndOfAnimation?: boolean}): Camera;
  zoomOut(options?: {duration?: number, callback?: (() => void), easing?: string, zoomModifier?: number, refX?: number, refY?: number, noEndOfAnimation?: boolean}): Camera;
  getAbsolutePosition(screenX: number, screenY: number): Point;
  getPositionOnScreen(absoluteX: number, absoluteY: number): Point;
  getSizeOnScreen(size: number): number;
  saveConfig(): CameraConfig;
  loadConfig(config: CameraConfig): void;
}

export interface CameraInteractions {
}

export interface Captor {
  pointedElement(): Node|Edge|null;
  draggedElement(): Node|Edge|null;
}

export interface Coalescence {
  groupNodes(parameters: {method: NodeGroupFunction, expression: Expression, duration?: number, callback?: () => void}): void;
  groupEdges(parameters: {method: EdgeGroupFunction, expression?: Expression, duration?: number, callback?: () => void}): void;
  ungroupNodes(parameters?: {duration?: number, callback?: () => void}): void;
  ungroupEdges(parameters?: {duration?: number, callback?: () => void}): void;
  reset(): void;
}

export interface ConnectNodes {
  enable(): void;
  disable(): void;
  setCondition(condition: ((node1: Node, node2: Node) => boolean)): ConnectNodes;
}

export interface Design {
  setStyles(styles: {nodes: AllNodeStyles, edges: AllEdgeStyles}): void;
  getStyles(): {nodes: AllNodeStyles, edges: AllEdgeStyles};
  reset(): void;
  setNodeColor(parameters: QualitativeColorStyle|QuantitativeColorStyle|((node: Node) => Color)): void;
  setEdgeColor(parameters: QualitativeColorStyle|QuantitativeColorStyle|((edge: Edge) => Color)): void;
  setNodeShape(parameters: ShapeStyle|((node: Node) => string)): void;
  setEdgeShape(parameters: ShapeStyle|((edge: Edge) => string)): void;
  setNodeIcon(parameters: IconStyle|((node: Node) => Icon)|string): void;
  setNodeImage(parameters: IconStyle|((node: Node) => Image)|string): void;
  setNodeSize(parameters: SizeStyle|((node: Node) => number)): void;
  setEdgeSize(parameters: SizeStyle|((edge: Edge) => number)): void;
  setNodeText(f: ((node: Node) => string)): void;
  setEdgeText(f: ((edge: Edge) => string)): void;
  resetNodeColor(): void;
  resetEdgeColor(): void;
  resetNodeShape(): void;
  resetEdgeShape(): void;
  resetNodeIcon(): void;
  resetNodeImage(): void;
  resetNodeSize(): void;
  resetEdgeSize(): void;
  resetNodeText(): void;
  resetEdgeText(): void;
  getNodeColor(): null|QualitativeColorStyle|QuantitativeColorStyle|((node: Node) => Color);
  getEdgeColor(): null|QualitativeColorStyle|QuantitativeColorStyle|((edge: Edge) => Color);
  getNodeShape(): null|ShapeStyle|((node: Node) => string);
  getEdgeShape(): null|ShapeStyle|((edge: Edge) => string);
  getNodeIcon(): null|IconStyle|((node: Node) => Icon)|string;
  getNodeImage(): null|ImageStyle|((node: Node) => Image)|string;
  getNodeSize(): null|SizeStyle|((node: Node) => number);
  getEdgeSize(): null|SizeStyle|((edge: Edge) => number);
  getNodeText(): null|((node: Node) => string);
  getEdgeText(): null|((edge: Edge) => string);
  setNodeReserveColors(colors: Array<Color>): void;
  setEdgeReserveColors(colors: Array<Color>): void;
  getNodeColorMapping(): { [key: string] : string };
  getEdgeColorMapping(): { [key: string] : string };
}

export interface Drag {
  nodes(nodes: Array<Node>, dx: number, dy: number, screenCoordinates: boolean): void;
}

export interface Drawing {
  animate(f: (() => void), duration: number, callback?: (() => void)): void;
  stopAnimations(callCallback: boolean): void;
  isAnimating(): boolean;
  addVisibilityCondition(isNode: boolean, condition: (() => void)): void;
  addCommonVisibilityCondition(condition: () => void): void;
  addNodeVisibilityCondition(condition: () => void): void;
  addEdgeVisibilityCondition(condition: () => void): void;
  setNodeDrawing(value: boolean): void;
  setEdgeDrawing(value: boolean): void;
}

export interface Dsl {
  computeExpression(elt: Node|Edge, expression: Expression, ignoreUndefined?: boolean): any;
  checkExpressionFormat(expression: Expression): string|null;
  expressionDepth(expression: Expression): number;
  registerOperator(name: string, func: DslOperator, override?: boolean): void;
  registerAggregator(name: string, func: DslAggregator, override?: boolean): void;
  operators(): { [key: string] : DslOperator };
  aggregators(): { [key: string] : DslAggregator };
}

export interface Events {
  bind(name: string, handler: ((...args : any[]) => void)): void;
  bind(events: { [key: string] : ((...args : any[]) => void) }): void;
  unbind(name: string, handler: ((...args : any[]) => void)): boolean;
  create(name: string, reverseOrder?: boolean): ((...args : any[]) => void);
}

export interface Exports {
  to(format: "csv", parameters?: {what: string, which?: Array<Id>, separator?: string, textSeparator?: string, categoriesName?: string}): Promise<string>;
  to(format: "gexf", parameters?: {creator?: string, description?: string}): Promise<string>;
  to(format: "graphml", parameters?: {graphId: string, directedEdges: boolean}): Promise<string>;
  to(format: "json", parameters?: {nodeFields?: void, edgeFields?: void, pretty?: void}): Promise<string>;
  to(format: "png|jpeg|tiff|gif", parameters?: {clip?: boolean, margin?: number, width?: number, height?: number, size?: number, background?: Color, texts?: boolean, map?: boolean, textWatermark?: {content: string, fontSize?: string, fontStyle?: string, fontColor?: Color, repeat?: boolean, angle?: number, alpha?: number, space?: number, x?: number, y?: number}|string, imageWatermark?: {content: string, width: number, height: number, repeat?: boolean, angle?: number, alpha?: number, space?: number, x?: number, y?: number}}): Promise<string>;
  to(format: "svg", parameters?: {clip?: boolean, margin?: number, width?: number, height?: number, size?: number, background?: Color, texts?: boolean}): Promise<string>;
  to(format: "xlsx", parameters?: {what: string, which?: Array<Id>}): Promise<any>;
}

export interface Filter {
  showNodes(predicate: Expression, ignoreUndefined?: boolean): void;
  hideNodes(predicate: Expression, ignoreUndefined?: boolean): void;
  showEdges(predicate: Expression, ignoreUndefined?: boolean): void;
  hideEdges(predicate: Expression, ignoreUndefined?: boolean): void;
  removeNodeFilter(): void;
  removeEdgeFilter(): void;
  reset(): void;
}

export interface Fps {
}

export interface Generators {
  load(generatorName: "balancedTree", parameters?: {nbChildren: number, height: number}, callback?: (() => void)): Promise<void>;
  load(generatorName: "barabasiAlbert", parameters?: {nbNodes: number, m0: number, m: number}, callback?: (() => void)): Promise<void>;
  load(generatorName: "erdosRenyi", parameters?: {nbNodes: number, p?: number, nbEdges?: number}, callback?: (() => void)): Promise<void>;
  load(generatorName: "grid", parameters?: {n: number, m: number, hsep?: number, vsep?: number}, callback?: (() => void)): Promise<void>;
  load(generatorName: "path", parameters?: {length: number}, callback?: (() => void)): Promise<void>;
  load(generatorName: "random", parameters?: {nbNodes: number, nbEdges: boolean}, callback?: (() => void)): Promise<void>;
}

export interface Geo {
  enable(callback?: Function, context?: any): Promise<any>;
  disable(callback?: Function, context?: any): Promise<any>;
  isEnabled(): boolean;
  toggle(context?: any): Promise<any>;
  resetCoordinates(): void;
  setView(latitude: number, longitude: number, zoom: number): void;
  setCenter(latitude: number, longitude: number): void;
  setZoom(zoom: number): void;
  getView(): {latitude: number, longitude: number, zoom: number};
  getCenter(): {latitude: number, longitude: number};
  getZoom(): number;
  exportBackground(canvas: any, callback: () => void, cameraConfig?: {x: number, y: number, zoom: number}): void;
  whenReady(fn: Function, context?: any): void;
}

export interface Graph {
  nodes: Array<Node>;
  edges: Array<Edge>;

  init(nodes: Array<NodeData>, edges: Array<EdgeData>): void;
  clear(): void;
  addNodes(nodesToAdd: Array<NodeData>): Array<Node>;
  addEdges(edgesToAdd: Array<EdgeData>): Array<Edge>;
  removeNodes(nodeIds: Array<NodeId>): void;
  removeEdges(edgeIds: Array<EdgeId>): void;
  addNode(node: NodeData): Node;
  addEdge(edge: EdgeData): Edge;
  removeNode(nodeId: NodeId): void;
  removeEdge(edgeId: EdgeId): void;
  unusedNodeId(): string;
  unusedEdgeId(): string;
  notifyNodeDataChange(ids: Array<NodeId>): void;
  notifyEdgeDataChange(ids: Array<EdgeId>): void;
  getNode(nodeId: NodeId, throwExceptionIfNotFound?: boolean): Node;
  getEdge(edgeId: EdgeId, throwExceptionIfNotFound?: boolean): Edge;
  cloneNode(node: Node): NodeData;
  cloneEdge(edge: Edge): EdgeData;
  getNodeIdList(): Array<NodeId>;
  getEdgeIdList(): Array<EdgeId>;
  getNodeList(ids?: Array<string|number|Node>): Array<Node>;
  getEdgeList(ids?: Array<string|number|Edge>): Array<Edge>;
}

export interface Groups {
  getMetaNodes(): Array<Node>;
  getMetaEdges(): Array<Edge>;
  getNonMetaNodes(): Array<Node>;
  getNonMetaEdges(): Array<Edge>;
  isMetaNode(node: Node): boolean;
  isMetaNode(edge: Edge): boolean;
  groupNodes(nodes: Array<Node>, method: ((nodes: Array<Node>) => NodeData), animationDuration?: number, callback?: (() => void)): Node;
  groupEdges(edges: Array<Edge>, method: ((edges: Array<Edge>) => EdgeData), animationDuration?: number, callback?: (() => void)): Edge;
  ungroupNodes(nodes: Array<Node>, animationDuration?: number, callback?: (() => void)): void;
  ungroupEdges(edges: Array<Edge>, animationDuration?: number, callback?: (() => void)): void;
  reset(): void;
}

export interface Halos {
}

export interface Hover {
}

export interface Icons {
}

export interface Images {
}

export interface Imports {
  from(format: string, file: string, parameters?: {batchSize?: number, onEnd?: ((success: boolean) => void), preProcess?: ((graph: {nodes: Array<NodeData>, edges: Array<EdgeData>}) => void)}|((success: boolean) => void)): Promise<void>;
}

export interface Keyboard {
  bind(keys: string|number|Array<string|number>, handler: () => void): void;
  isPressed(key: string|number): boolean;
}

export interface Lasso {
  start(): void;
  stop(): void;
  isActive(): boolean;
}

export interface Layouts {
  start(layoutName: "concentric", layoutParams?: {centralNode: Id, nodes?: Array<Id>, centerX?: number, centerY?: number, sortBy?: string, clockWise?: boolean, allowOverlap?: boolean, circleHopRatio?: number}, syncParameters?: {duration?: number, onSync?: (() => void), onEnd?: (() => void), useWebWorker?: boolean}): Promise<void>;
  start(layoutName: "forceLink", layoutParams?: {nodes?: Array<Node|NodeId>, scalingRatio?: number, gravity?: number, adjustSizes?: boolean, edgeWeightInfluence?: number, linLogMode?: boolean, outboundAttractionDistribution?: boolean, strongGravityMode?: boolean, slowDown?: number, alignNodeSiblings?: boolean, nodeSiblingsScale?: number, nodeSiblingsAngleMin?: number, autoStop?: boolean, maxIterations?: number, avgDistanceThreshold?: number, startingIterations?: number, iterationsPerRender?: number, barnesHutOptimize?: boolean, barnesHutTheta?: number}, syncParameters?: {duration?: number, onSync?: (() => void), onEnd?: (() => void), useWebWorker?: boolean}): Promise<void>;
  start(layoutName: "grid", layoutParams?: {nbRows: number, nbCols: number, nodes?: Array<Id>, sortBy?: string, reverse?: boolean}, syncParameters?: {duration?: number, onSync?: (() => void), onEnd?: (() => void), useWebWorker?: boolean}): Promise<void>;
  stop(): void;
  isRunning(): boolean;
}

export interface Legend {
  reload(): void;
  setTitleFunction(f: null|((propertyPath: string, elementType: string) => string)): void;
  setVisible(visible: boolean): void;
  isVisible(): boolean;
}

export interface Locate {
  center(parameters?: {duration?: number, callback?: (() => void), finalZoom?: number, easing?: string, padding?: {top?: number, bottom?: number, left?: number, right?: number}}): Locate;
  nodes(nodes: Array<Node|NodeId>|undefined, parameters?: {duration?: number, callback?: (() => void), finalZoom?: number, easing?: string, padding?: {top?: number, bottom?: number, left?: number, right?: number}}): Locate;
  edges(edges: Array<Edge|EdgeId>|undefined, parameters?: {duration?: number, callback?: (() => void), finalZoom?: number, easing?: string, padding?: {top?: number, bottom?: number, left?: number, right?: number}}): Locate;
  nodesBoundingBox(nodes?: Array<Node>): {minX: number, minY: number, maxX: number, maxY: number, cx: number, cy: number, width: number, height: number, maxSize: number};
  edgesBoundingBox(edges?: Array<Edge>): {minX: number, minY: number, maxX: number, maxY: number, cx: number, cy: number, width: number, height: number, maxSize: number};
  graphInCamera(): boolean;
}

export interface Mouse {
  x: number;
  y: number;
  left: boolean;
  right: boolean;
  middle: boolean;

}

export interface Outlines {
}

export interface Partitions {
  nodes(expression: Expression, options?: {onPartitionChange?: ((node: Node, partitionId: string, previousPartitionId: string|undefined) => void), onAdd?: ((node: Node) => void), onRemove?: ((node: Node, partitionId: string) => void), onKill?: (() => void)}, ignoreUndefined?: boolean): PartitionList;
  edges(expression: Expression, options?: {onPartitionChange?: (() => void), onAdd?: (() => void), onRemove?: (() => void), onKill?: (() => void)}, ignoreUndefined?: boolean): PartitionList;
}

export interface Pathfinding {
  astar(sourceId: Id, targetId: Id, options?: {pathLengthFunction?: ((node1: Node, node2: Node) => number), heuristicLengthFunction?: ((node1: Node, node2: Node) => number)}): Array<Node>;
  dijkstra(sourceId: Id, targetId: Id, options?: {pathLengthFunction?: ((node1: Node, node2: Node) => number)}): Array<Node>;
}

export interface PieCharts {
}

export interface Pinning {
  getPinnedNodes(): Array<Node>;
  getUnpinnedNodes(): Array<Node>;
}

export interface Pulses {
  nodes(nodes: Node|Id|Array<Node|NodeId>, options?: {nbPulses?: number, pulseDuration?: number, pulseInterval?: number, startColor?: Color, endColor?: Color}): void;
  edges(edges: Edge|Id|Array<Edge|EdgeId>, options?: {nbPulses?: number, pulseDuration?: number, pulseInterval?: number, startColor?: Color, endColor?: Color}): void;
}

export interface Render {
  setContainer(DOMElement: HTMLElement|string|null): void;
  getContainer(): HTMLElement|null;
  getCanvas(): HTMLElement|null;
  resize(): void;
  atNextFrame(f: (() => void)): void;
  reloadFonts(): void;
  setCursorStyle(style: string): void;
  removeCursorStyle(style: string): void;
  fullScreen(value?: boolean): void;
  isFullScreen(): boolean;
  setBackgroundColor(color: Color|null): Color|null;
  getBackgroundColor(): Color|null;
}

export interface Selection {
  clear(clearType?: string): void;
  addNodes(nodes?: Array<Node|NodeId>): void;
  addEdges(edges?: Array<Edge|EdgeId>): void;
  dropNodes(nodes?: Array<Node|NodeId>): void;
  dropEdges(edges?: Array<Edge|EdgeId>): void;
  nodes(): Array<Node>;
  edges(): Array<Edge>;
  nbNodes(): number;
  nbEdges(): number;
  addNeighbors(): void;
  setNodesBy(predicate: ((node: Node) => boolean)): void;
  setEdgesBy(predicate: ((edge: Edge) => boolean)): void;
  invertNodes(nodes?: Array<Node|NodeId>): void;
  invertEdges(edges?: Array<Edge|EdgeId>): void;
}

export interface Settings {
  get(moduleName: "animations", autoUpdate?: boolean): {};
  get(moduleName: "badges", autoUpdate?: boolean): {scale?: number, positionScale?: number, defaultColor?: Color, defaultTextColor?: Color, defaultStrokeColor?: Color, strokeWidth?: number, defaultFont?: string, fontStyle?: string, fontScale?: number, textThreshold?: number, threshold?: number, hideStrokeOnHiddenContent?: boolean, drawBadges?: boolean};
  get(moduleName: "brand", autoUpdate?: boolean): {position?: string, horizontalMargin?: number, verticalMargin?: number};
  get(moduleName: "camera", autoUpdate?: boolean): {maxZoom?: number, minZoom?: number, defaultZoomModifier?: number, defaultEasing?: string};
  get(moduleName: "cameraInteractions", autoUpdate?: boolean): {zoomDuration?: number, zoomModifier?: number|undefined, zoomEnabled?: boolean, panningEnabled?: boolean, rotationEnabled?: boolean, skipNodeDrawingWhileZooming?: boolean, skipEdgeDrawingWhileZooming?: boolean, skipNodeTextDrawingWhileZooming?: boolean, skipEdgeTextDrawingWhileZooming?: boolean, skipNodeDrawingWhilePanning?: boolean, skipEdgeDrawingWhilePanning?: boolean, skipNodeTextDrawingWhilePanning?: boolean, skipEdgeTextDrawingWhilePanning?: boolean, skipNodeDrawingWhileRotating?: boolean, skipEdgeDrawingWhileRotating?: boolean, skipNodeTextDrawingWhileRotating?: boolean, skipEdgeTextDrawingWhileRotating?: boolean, skipNodeDrawingWhileGesture?: boolean, skipEdgeDrawingWhileGesture?: boolean, skipNodeTextDrawingWhileGesture?: boolean, skipEdgeTextDrawingWhileGesture?: boolean};
  get(moduleName: "captor", autoUpdate?: boolean): {nodes?: boolean, edges?: boolean, nodeTexts?: boolean, edgeTexts?: boolean, nodeErrorMargin?: number, edgeErrorMargin?: number};
  get(moduleName: "coalescence", autoUpdate?: boolean): {};
  get(moduleName: "connectNodes", autoUpdate?: boolean): {strokeColor?: Color, strokeWidth?: number, cursorStyle?: string, continueDrawing?: boolean, createNodes?: boolean};
  get(moduleName: "design", autoUpdate?: boolean): {defaultSizeBins?: number};
  get(moduleName: "drag", autoUpdate?: boolean): {manual?: boolean};
  get(moduleName: "drawing", autoUpdate?: boolean): {defaultNodeSize?: number, defaultEdgeSize?: number, edgeClipping?: boolean, edgeClippingPadding?: number};
  get(moduleName: "dsl", autoUpdate?: boolean): {};
  get(moduleName: "events", autoUpdate?: boolean): {};
  get(moduleName: "exports", autoUpdate?: boolean): {};
  get(moduleName: "filter", autoUpdate?: boolean): {};
  get(moduleName: "fps", autoUpdate?: boolean): {average?: boolean};
  get(moduleName: "generators", autoUpdate?: boolean): {webWorker?: boolean};
  get(moduleName: "geo", autoUpdate?: boolean): {latitudePath?: string, longitudePath?: string, sizeZoomReferential?: number, maxZoomLevel?: number, tileUrlTemplate?: string, tileUrlSubdomains?: string, attribution?: string, backgroundColor?: Color, transitionDuration?: Color, backgroundFadingDuration?: Color, detectRetina?: boolean};
  get(moduleName: "graph", autoUpdate?: boolean): {};
  get(moduleName: "groups", autoUpdate?: boolean): {};
  get(moduleName: "halos", autoUpdate?: boolean): {nodeColor?: Color, nodeSize?: number, nodeStrokeColor?: Color|undefined, nodeStrokeWidth?: number, nodeClustering?: boolean, nodeClusteringMaxRadius?: number, edgeColor?: Color, edgeSize?: number};
  get(moduleName: "hover", autoUpdate?: boolean): {nodeOuterStrokeColor?: Color|'inherit'|null, edgeColor?: Color|'inherit'|null, highlightEdgeExtremities?: boolean, nodeCursorStyle?: string, edgeCursorStyle?: string, nodeTextBackgroundColor?: Color|null, edgeTextBackgroundColor?: Color|null, nodeTextFontStyle?: string|null|undefined, edgeTextFontStyle?: string|null|undefined, nodeTextFontColor?: Color|undefined, edgeTextFontColor?: Color|undefined, outline?: boolean, nodes?: boolean, edges?: boolean, delay?: number};
  get(moduleName: "icons", autoUpdate?: boolean): {defaultFont?: string, defaultScale?: number, defaultColor?: string, threshold?: number};
  get(moduleName: "images", autoUpdate?: boolean): {defaultScale?: number, defaultRescale?: boolean, defaultDuplicate?: boolean, threshold?: number};
  get(moduleName: "imports", autoUpdate?: boolean): {webWorker?: boolean, batchSize?: number};
  get(moduleName: "keyboard", autoUpdate?: boolean): {};
  get(moduleName: "lasso", autoUpdate?: boolean): {strokeColor?: Color, strokeWidth?: number, cursorStyle?: string, addKey?: string|null, removeKey?: string|null};
  get(moduleName: "layouts", autoUpdate?: boolean): {defaultSyncDuration?: number, skipTextDrawing?: boolean, useWebWorker?: boolean};
  get(moduleName: "legend", autoUpdate?: boolean): {enabled?: boolean, widgetWidth?: number, fontFamily?: string, fontSize?: number, fontColor?: string, titleFontSize?: number, titleFontColor?: string, titleMaxLength?: number, titleTextAlign?: string, shapeColor?: string, backgroundColor?: string, borderColor?: string, borderRadius?: number, borderWidth?: number, innerMargin?: number, outerMargin?: number, circleStrokeWidth?: number};
  get(moduleName: "locate", autoUpdate?: boolean): {centerOnResize?: boolean, centerAtInit?: boolean, defaultLeftPadding?: number, defaultRightPadding?: number, defaultTopPadding?: number, defaultBottomPadding?: number, defaultEasing?: string, maxNodeSizeOnScreen?: number|null};
  get(moduleName: "mouse", autoUpdate?: boolean): {enabled?: boolean, doubleClickTimer?: number, eventRate?: number, wheelEnabled?: boolean, disableWheelUntilMouseDown?: boolean};
  get(moduleName: "outlines", autoUpdate?: boolean): {nodeThreshold?: number|undefined, edgeThreshold?: number, nodeRelativeSize?: number, nodeAbsoluteSize?: number, nodeRelativeOffsetY?: number, nodeAbsoluteOffsetY?: number, edgeRelativeSize?: number, edgeAbsoluteSize?: number, edgeRelativeOffsetY?: number, edgeAbsoluteOffsetY?: number, color?: Color};
  get(moduleName: "partitions", autoUpdate?: boolean): {};
  get(moduleName: "pathfinding", autoUpdate?: boolean): {};
  get(moduleName: "pieCharts", autoUpdate?: boolean): {};
  get(moduleName: "pinning", autoUpdate?: boolean): {};
  get(moduleName: "pulses", autoUpdate?: boolean): {pulseDuration?: number, pulseInterval?: number, numberOfPulses?: number, nodePulseWidth?: number, nodePulseStartRatio?: number, nodePulseEndRatio?: number, nodePulseStartColor?: Color, nodePulseEndColor?: Color, edgePulseWidth?: number, edgePulseStartRatio?: number, edgePulseEndRatio?: number, edgePulseStartColor?: Color, edgePulseEndColor?: Color};
  get(moduleName: "render", autoUpdate?: boolean): {imgCrossOrigin?: string|null, backgroundColor?: string, defaultCursorStyle?: string, defaultFont?: string, webGLAntiAliasing?: string, webGLFontSamplingSize?: number, webGLMinimumSVGSize?: number};
  get(moduleName: "selection", autoUpdate?: boolean): {nodeOuterStrokeColor?: Color|'inherit'|null, nodeTextFontStyle?: 'none'|'italic'|'bold'|undefined, nodeTextFontColor?: Color|undefined, nodeTextBackgroundColor?: Color|undefined|null, edgeColor?: Color|'inherit'|null, edgeTextFontStyle?: 'none'|'italic'|'bold'|undefined, edgeTextFontColor?: Color|undefined, edgeTextBackgroundColor?: Color|undefined|null, outline?: boolean, manual?: boolean, multiSelectionKey?: string|null};
  get(moduleName: "settings", autoUpdate?: boolean): {};
  get(moduleName: "shapes", autoUpdate?: boolean): {defaultNodeShape?: string, defaultEdgeShape?: string, defaultNodeColor?: string, nodeInnerStrokeColor?: string, nodeInnerStrokeWidth?: number, nodeOuterStrokeWidth?: number, nodeInnerStrokeThreshold?: number|undefined, defaultEdgeColor?: string, overrideEdgeColor?: string|undefined, edgeStrokeWidth?: number, edgesAlwaysCurvy?: boolean, directedEdges?: boolean, edgeThreshold?: number|undefined};
  get(moduleName: "texts", autoUpdate?: boolean): {enabled?: boolean, preventOverlap?: boolean, fontFamily?: string, nodes?: boolean, nodeFontColor?: Color, nodeFontStyle?: 'none'|'bold'|'italic', nodeFontSizeFunction?: 'fixed'|'ratio', nodeFontSize?: number, nodeFontSizeRatio?: number, nodeBackgroundColor?: Color|null|'inherit', nodeTextAlignment?: 'right'|'left'|'top'|'bottom'|'center', nodeSizeThreshold?: number, nodeMaxTextLength?: number|undefined, nodeBackgroundMargin?: number, nodeTextOffset?: number, nodeMaxTextLineLength?: number, backgroundArrowBase?: number, edges?: boolean, edgeFontColor?: Color, edgeFontStyle?: 'none'|'bold'|'italic', edgeFontSizeFunction?: 'fixed'|'ratio', edgeFontSize?: number, edgeFontSizeRatio?: number, edgeBackgroundColor?: Color|null|'inherit', edgeSizeThreshold?: number, edgeMaxTextLength?: number|undefined, edgeBackgroundMargin?: number, edgeTextOffset?: number, edgeMaxTextLineLength?: number};
  get(moduleName: "tooltip", autoUpdate?: boolean): {position?: string, autoAdjust?: boolean, hoverDelay?: number, className?: string};
  get(moduleName: "topology", autoUpdate?: boolean): {};
  get(moduleName: "touch", autoUpdate?: boolean): {enabled?: boolean, doubleTapTimer?: number, eventRate?: number};
  get(moduleName: "dagre", autoUpdate?: boolean): {defaultDirected?: boolean, defaultMultigraph?: boolean, defaultCompound?: boolean, defaultRankDir?: string, defaultDuration?: number, maxNbNodes?: number, maxNbEdges?: number};
  get(moduleName: "neo4J", autoUpdate?: boolean): {};
  update(moduleName: "animations", settings?: {}): void;
  update(moduleName: "badges", settings?: {scale?: number, positionScale?: number, defaultColor?: Color, defaultTextColor?: Color, defaultStrokeColor?: Color, strokeWidth?: number, defaultFont?: string, fontStyle?: string, fontScale?: number, textThreshold?: number, threshold?: number, hideStrokeOnHiddenContent?: boolean, drawBadges?: boolean}): void;
  update(moduleName: "brand", settings?: {position?: string, horizontalMargin?: number, verticalMargin?: number}): void;
  update(moduleName: "camera", settings?: {maxZoom?: number, minZoom?: number, defaultZoomModifier?: number, defaultEasing?: string}): void;
  update(moduleName: "cameraInteractions", settings?: {zoomDuration?: number, zoomModifier?: number|undefined, zoomEnabled?: boolean, panningEnabled?: boolean, rotationEnabled?: boolean, skipNodeDrawingWhileZooming?: boolean, skipEdgeDrawingWhileZooming?: boolean, skipNodeTextDrawingWhileZooming?: boolean, skipEdgeTextDrawingWhileZooming?: boolean, skipNodeDrawingWhilePanning?: boolean, skipEdgeDrawingWhilePanning?: boolean, skipNodeTextDrawingWhilePanning?: boolean, skipEdgeTextDrawingWhilePanning?: boolean, skipNodeDrawingWhileRotating?: boolean, skipEdgeDrawingWhileRotating?: boolean, skipNodeTextDrawingWhileRotating?: boolean, skipEdgeTextDrawingWhileRotating?: boolean, skipNodeDrawingWhileGesture?: boolean, skipEdgeDrawingWhileGesture?: boolean, skipNodeTextDrawingWhileGesture?: boolean, skipEdgeTextDrawingWhileGesture?: boolean}): void;
  update(moduleName: "captor", settings?: {nodes?: boolean, edges?: boolean, nodeTexts?: boolean, edgeTexts?: boolean, nodeErrorMargin?: number, edgeErrorMargin?: number}): void;
  update(moduleName: "coalescence", settings?: {}): void;
  update(moduleName: "connectNodes", settings?: {strokeColor?: Color, strokeWidth?: number, cursorStyle?: string, continueDrawing?: boolean, createNodes?: boolean}): void;
  update(moduleName: "design", settings?: {defaultSizeBins?: number}): void;
  update(moduleName: "drag", settings?: {manual?: boolean}): void;
  update(moduleName: "drawing", settings?: {defaultNodeSize?: number, defaultEdgeSize?: number, edgeClipping?: boolean, edgeClippingPadding?: number}): void;
  update(moduleName: "dsl", settings?: {}): void;
  update(moduleName: "events", settings?: {}): void;
  update(moduleName: "exports", settings?: {}): void;
  update(moduleName: "filter", settings?: {}): void;
  update(moduleName: "fps", settings?: {average?: boolean}): void;
  update(moduleName: "generators", settings?: {webWorker?: boolean}): void;
  update(moduleName: "geo", settings?: {latitudePath?: string, longitudePath?: string, sizeZoomReferential?: number, maxZoomLevel?: number, tileUrlTemplate?: string, tileUrlSubdomains?: string, attribution?: string, backgroundColor?: Color, transitionDuration?: Color, backgroundFadingDuration?: Color, detectRetina?: boolean}): void;
  update(moduleName: "graph", settings?: {}): void;
  update(moduleName: "groups", settings?: {}): void;
  update(moduleName: "halos", settings?: {nodeColor?: Color, nodeSize?: number, nodeStrokeColor?: Color|undefined, nodeStrokeWidth?: number, nodeClustering?: boolean, nodeClusteringMaxRadius?: number, edgeColor?: Color, edgeSize?: number}): void;
  update(moduleName: "hover", settings?: {nodeOuterStrokeColor?: Color|'inherit'|null, edgeColor?: Color|'inherit'|null, highlightEdgeExtremities?: boolean, nodeCursorStyle?: string, edgeCursorStyle?: string, nodeTextBackgroundColor?: Color|null, edgeTextBackgroundColor?: Color|null, nodeTextFontStyle?: string|null|undefined, edgeTextFontStyle?: string|null|undefined, nodeTextFontColor?: Color|undefined, edgeTextFontColor?: Color|undefined, outline?: boolean, nodes?: boolean, edges?: boolean, delay?: number}): void;
  update(moduleName: "icons", settings?: {defaultFont?: string, defaultScale?: number, defaultColor?: string, threshold?: number}): void;
  update(moduleName: "images", settings?: {defaultScale?: number, defaultRescale?: boolean, defaultDuplicate?: boolean, threshold?: number}): void;
  update(moduleName: "imports", settings?: {webWorker?: boolean, batchSize?: number}): void;
  update(moduleName: "keyboard", settings?: {}): void;
  update(moduleName: "lasso", settings?: {strokeColor?: Color, strokeWidth?: number, cursorStyle?: string, addKey?: string|null, removeKey?: string|null}): void;
  update(moduleName: "layouts", settings?: {defaultSyncDuration?: number, skipTextDrawing?: boolean, useWebWorker?: boolean}): void;
  update(moduleName: "legend", settings?: {enabled?: boolean, widgetWidth?: number, fontFamily?: string, fontSize?: number, fontColor?: string, titleFontSize?: number, titleFontColor?: string, titleMaxLength?: number, titleTextAlign?: string, shapeColor?: string, backgroundColor?: string, borderColor?: string, borderRadius?: number, borderWidth?: number, innerMargin?: number, outerMargin?: number, circleStrokeWidth?: number}): void;
  update(moduleName: "locate", settings?: {centerOnResize?: boolean, centerAtInit?: boolean, defaultLeftPadding?: number, defaultRightPadding?: number, defaultTopPadding?: number, defaultBottomPadding?: number, defaultEasing?: string, maxNodeSizeOnScreen?: number|null}): void;
  update(moduleName: "mouse", settings?: {enabled?: boolean, doubleClickTimer?: number, eventRate?: number, wheelEnabled?: boolean, disableWheelUntilMouseDown?: boolean}): void;
  update(moduleName: "outlines", settings?: {nodeThreshold?: number|undefined, edgeThreshold?: number, nodeRelativeSize?: number, nodeAbsoluteSize?: number, nodeRelativeOffsetY?: number, nodeAbsoluteOffsetY?: number, edgeRelativeSize?: number, edgeAbsoluteSize?: number, edgeRelativeOffsetY?: number, edgeAbsoluteOffsetY?: number, color?: Color}): void;
  update(moduleName: "partitions", settings?: {}): void;
  update(moduleName: "pathfinding", settings?: {}): void;
  update(moduleName: "pieCharts", settings?: {}): void;
  update(moduleName: "pinning", settings?: {}): void;
  update(moduleName: "pulses", settings?: {pulseDuration?: number, pulseInterval?: number, numberOfPulses?: number, nodePulseWidth?: number, nodePulseStartRatio?: number, nodePulseEndRatio?: number, nodePulseStartColor?: Color, nodePulseEndColor?: Color, edgePulseWidth?: number, edgePulseStartRatio?: number, edgePulseEndRatio?: number, edgePulseStartColor?: Color, edgePulseEndColor?: Color}): void;
  update(moduleName: "render", settings?: {imgCrossOrigin?: string|null, backgroundColor?: string, defaultCursorStyle?: string, defaultFont?: string, webGLAntiAliasing?: string, webGLFontSamplingSize?: number, webGLMinimumSVGSize?: number}): void;
  update(moduleName: "selection", settings?: {nodeOuterStrokeColor?: Color|'inherit'|null, nodeTextFontStyle?: 'none'|'italic'|'bold'|undefined, nodeTextFontColor?: Color|undefined, nodeTextBackgroundColor?: Color|undefined|null, edgeColor?: Color|'inherit'|null, edgeTextFontStyle?: 'none'|'italic'|'bold'|undefined, edgeTextFontColor?: Color|undefined, edgeTextBackgroundColor?: Color|undefined|null, outline?: boolean, manual?: boolean, multiSelectionKey?: string|null}): void;
  update(moduleName: "settings", settings?: {}): void;
  update(moduleName: "shapes", settings?: {defaultNodeShape?: string, defaultEdgeShape?: string, defaultNodeColor?: string, nodeInnerStrokeColor?: string, nodeInnerStrokeWidth?: number, nodeOuterStrokeWidth?: number, nodeInnerStrokeThreshold?: number|undefined, defaultEdgeColor?: string, overrideEdgeColor?: string|undefined, edgeStrokeWidth?: number, edgesAlwaysCurvy?: boolean, directedEdges?: boolean, edgeThreshold?: number|undefined}): void;
  update(moduleName: "texts", settings?: {enabled?: boolean, preventOverlap?: boolean, fontFamily?: string, nodes?: boolean, nodeFontColor?: Color, nodeFontStyle?: 'none'|'bold'|'italic', nodeFontSizeFunction?: 'fixed'|'ratio', nodeFontSize?: number, nodeFontSizeRatio?: number, nodeBackgroundColor?: Color|null|'inherit', nodeTextAlignment?: 'right'|'left'|'top'|'bottom'|'center', nodeSizeThreshold?: number, nodeMaxTextLength?: number|undefined, nodeBackgroundMargin?: number, nodeTextOffset?: number, nodeMaxTextLineLength?: number, backgroundArrowBase?: number, edges?: boolean, edgeFontColor?: Color, edgeFontStyle?: 'none'|'bold'|'italic', edgeFontSizeFunction?: 'fixed'|'ratio', edgeFontSize?: number, edgeFontSizeRatio?: number, edgeBackgroundColor?: Color|null|'inherit', edgeSizeThreshold?: number, edgeMaxTextLength?: number|undefined, edgeBackgroundMargin?: number, edgeTextOffset?: number, edgeMaxTextLineLength?: number}): void;
  update(moduleName: "tooltip", settings?: {position?: string, autoAdjust?: boolean, hoverDelay?: number, className?: string}): void;
  update(moduleName: "topology", settings?: {}): void;
  update(moduleName: "touch", settings?: {enabled?: boolean, doubleTapTimer?: number, eventRate?: number}): void;
  update(moduleName: "dagre", settings?: {defaultDirected?: boolean, defaultMultigraph?: boolean, defaultCompound?: boolean, defaultRankDir?: string, defaultDuration?: number, maxNbNodes?: number, maxNbEdges?: number}): void;
  update(moduleName: "neo4J", settings?: {}): void;
  reset(moduleName: "animations", settings?: {}): void;
  reset(moduleName: "badges", settings?: {scale?: number, positionScale?: number, defaultColor?: Color, defaultTextColor?: Color, defaultStrokeColor?: Color, strokeWidth?: number, defaultFont?: string, fontStyle?: string, fontScale?: number, textThreshold?: number, threshold?: number, hideStrokeOnHiddenContent?: boolean, drawBadges?: boolean}): void;
  reset(moduleName: "brand", settings?: {position?: string, horizontalMargin?: number, verticalMargin?: number}): void;
  reset(moduleName: "camera", settings?: {maxZoom?: number, minZoom?: number, defaultZoomModifier?: number, defaultEasing?: string}): void;
  reset(moduleName: "cameraInteractions", settings?: {zoomDuration?: number, zoomModifier?: number|undefined, zoomEnabled?: boolean, panningEnabled?: boolean, rotationEnabled?: boolean, skipNodeDrawingWhileZooming?: boolean, skipEdgeDrawingWhileZooming?: boolean, skipNodeTextDrawingWhileZooming?: boolean, skipEdgeTextDrawingWhileZooming?: boolean, skipNodeDrawingWhilePanning?: boolean, skipEdgeDrawingWhilePanning?: boolean, skipNodeTextDrawingWhilePanning?: boolean, skipEdgeTextDrawingWhilePanning?: boolean, skipNodeDrawingWhileRotating?: boolean, skipEdgeDrawingWhileRotating?: boolean, skipNodeTextDrawingWhileRotating?: boolean, skipEdgeTextDrawingWhileRotating?: boolean, skipNodeDrawingWhileGesture?: boolean, skipEdgeDrawingWhileGesture?: boolean, skipNodeTextDrawingWhileGesture?: boolean, skipEdgeTextDrawingWhileGesture?: boolean}): void;
  reset(moduleName: "captor", settings?: {nodes?: boolean, edges?: boolean, nodeTexts?: boolean, edgeTexts?: boolean, nodeErrorMargin?: number, edgeErrorMargin?: number}): void;
  reset(moduleName: "coalescence", settings?: {}): void;
  reset(moduleName: "connectNodes", settings?: {strokeColor?: Color, strokeWidth?: number, cursorStyle?: string, continueDrawing?: boolean, createNodes?: boolean}): void;
  reset(moduleName: "design", settings?: {defaultSizeBins?: number}): void;
  reset(moduleName: "drag", settings?: {manual?: boolean}): void;
  reset(moduleName: "drawing", settings?: {defaultNodeSize?: number, defaultEdgeSize?: number, edgeClipping?: boolean, edgeClippingPadding?: number}): void;
  reset(moduleName: "dsl", settings?: {}): void;
  reset(moduleName: "events", settings?: {}): void;
  reset(moduleName: "exports", settings?: {}): void;
  reset(moduleName: "filter", settings?: {}): void;
  reset(moduleName: "fps", settings?: {average?: boolean}): void;
  reset(moduleName: "generators", settings?: {webWorker?: boolean}): void;
  reset(moduleName: "geo", settings?: {latitudePath?: string, longitudePath?: string, sizeZoomReferential?: number, maxZoomLevel?: number, tileUrlTemplate?: string, tileUrlSubdomains?: string, attribution?: string, backgroundColor?: Color, transitionDuration?: Color, backgroundFadingDuration?: Color, detectRetina?: boolean}): void;
  reset(moduleName: "graph", settings?: {}): void;
  reset(moduleName: "groups", settings?: {}): void;
  reset(moduleName: "halos", settings?: {nodeColor?: Color, nodeSize?: number, nodeStrokeColor?: Color|undefined, nodeStrokeWidth?: number, nodeClustering?: boolean, nodeClusteringMaxRadius?: number, edgeColor?: Color, edgeSize?: number}): void;
  reset(moduleName: "hover", settings?: {nodeOuterStrokeColor?: Color|'inherit'|null, edgeColor?: Color|'inherit'|null, highlightEdgeExtremities?: boolean, nodeCursorStyle?: string, edgeCursorStyle?: string, nodeTextBackgroundColor?: Color|null, edgeTextBackgroundColor?: Color|null, nodeTextFontStyle?: string|null|undefined, edgeTextFontStyle?: string|null|undefined, nodeTextFontColor?: Color|undefined, edgeTextFontColor?: Color|undefined, outline?: boolean, nodes?: boolean, edges?: boolean, delay?: number}): void;
  reset(moduleName: "icons", settings?: {defaultFont?: string, defaultScale?: number, defaultColor?: string, threshold?: number}): void;
  reset(moduleName: "images", settings?: {defaultScale?: number, defaultRescale?: boolean, defaultDuplicate?: boolean, threshold?: number}): void;
  reset(moduleName: "imports", settings?: {webWorker?: boolean, batchSize?: number}): void;
  reset(moduleName: "keyboard", settings?: {}): void;
  reset(moduleName: "lasso", settings?: {strokeColor?: Color, strokeWidth?: number, cursorStyle?: string, addKey?: string|null, removeKey?: string|null}): void;
  reset(moduleName: "layouts", settings?: {defaultSyncDuration?: number, skipTextDrawing?: boolean, useWebWorker?: boolean}): void;
  reset(moduleName: "legend", settings?: {enabled?: boolean, widgetWidth?: number, fontFamily?: string, fontSize?: number, fontColor?: string, titleFontSize?: number, titleFontColor?: string, titleMaxLength?: number, titleTextAlign?: string, shapeColor?: string, backgroundColor?: string, borderColor?: string, borderRadius?: number, borderWidth?: number, innerMargin?: number, outerMargin?: number, circleStrokeWidth?: number}): void;
  reset(moduleName: "locate", settings?: {centerOnResize?: boolean, centerAtInit?: boolean, defaultLeftPadding?: number, defaultRightPadding?: number, defaultTopPadding?: number, defaultBottomPadding?: number, defaultEasing?: string, maxNodeSizeOnScreen?: number|null}): void;
  reset(moduleName: "mouse", settings?: {enabled?: boolean, doubleClickTimer?: number, eventRate?: number, wheelEnabled?: boolean, disableWheelUntilMouseDown?: boolean}): void;
  reset(moduleName: "outlines", settings?: {nodeThreshold?: number|undefined, edgeThreshold?: number, nodeRelativeSize?: number, nodeAbsoluteSize?: number, nodeRelativeOffsetY?: number, nodeAbsoluteOffsetY?: number, edgeRelativeSize?: number, edgeAbsoluteSize?: number, edgeRelativeOffsetY?: number, edgeAbsoluteOffsetY?: number, color?: Color}): void;
  reset(moduleName: "partitions", settings?: {}): void;
  reset(moduleName: "pathfinding", settings?: {}): void;
  reset(moduleName: "pieCharts", settings?: {}): void;
  reset(moduleName: "pinning", settings?: {}): void;
  reset(moduleName: "pulses", settings?: {pulseDuration?: number, pulseInterval?: number, numberOfPulses?: number, nodePulseWidth?: number, nodePulseStartRatio?: number, nodePulseEndRatio?: number, nodePulseStartColor?: Color, nodePulseEndColor?: Color, edgePulseWidth?: number, edgePulseStartRatio?: number, edgePulseEndRatio?: number, edgePulseStartColor?: Color, edgePulseEndColor?: Color}): void;
  reset(moduleName: "render", settings?: {imgCrossOrigin?: string|null, backgroundColor?: string, defaultCursorStyle?: string, defaultFont?: string, webGLAntiAliasing?: string, webGLFontSamplingSize?: number, webGLMinimumSVGSize?: number}): void;
  reset(moduleName: "selection", settings?: {nodeOuterStrokeColor?: Color|'inherit'|null, nodeTextFontStyle?: 'none'|'italic'|'bold'|undefined, nodeTextFontColor?: Color|undefined, nodeTextBackgroundColor?: Color|undefined|null, edgeColor?: Color|'inherit'|null, edgeTextFontStyle?: 'none'|'italic'|'bold'|undefined, edgeTextFontColor?: Color|undefined, edgeTextBackgroundColor?: Color|undefined|null, outline?: boolean, manual?: boolean, multiSelectionKey?: string|null}): void;
  reset(moduleName: "settings", settings?: {}): void;
  reset(moduleName: "shapes", settings?: {defaultNodeShape?: string, defaultEdgeShape?: string, defaultNodeColor?: string, nodeInnerStrokeColor?: string, nodeInnerStrokeWidth?: number, nodeOuterStrokeWidth?: number, nodeInnerStrokeThreshold?: number|undefined, defaultEdgeColor?: string, overrideEdgeColor?: string|undefined, edgeStrokeWidth?: number, edgesAlwaysCurvy?: boolean, directedEdges?: boolean, edgeThreshold?: number|undefined}): void;
  reset(moduleName: "texts", settings?: {enabled?: boolean, preventOverlap?: boolean, fontFamily?: string, nodes?: boolean, nodeFontColor?: Color, nodeFontStyle?: 'none'|'bold'|'italic', nodeFontSizeFunction?: 'fixed'|'ratio', nodeFontSize?: number, nodeFontSizeRatio?: number, nodeBackgroundColor?: Color|null|'inherit', nodeTextAlignment?: 'right'|'left'|'top'|'bottom'|'center', nodeSizeThreshold?: number, nodeMaxTextLength?: number|undefined, nodeBackgroundMargin?: number, nodeTextOffset?: number, nodeMaxTextLineLength?: number, backgroundArrowBase?: number, edges?: boolean, edgeFontColor?: Color, edgeFontStyle?: 'none'|'bold'|'italic', edgeFontSizeFunction?: 'fixed'|'ratio', edgeFontSize?: number, edgeFontSizeRatio?: number, edgeBackgroundColor?: Color|null|'inherit', edgeSizeThreshold?: number, edgeMaxTextLength?: number|undefined, edgeBackgroundMargin?: number, edgeTextOffset?: number, edgeMaxTextLineLength?: number}): void;
  reset(moduleName: "tooltip", settings?: {position?: string, autoAdjust?: boolean, hoverDelay?: number, className?: string}): void;
  reset(moduleName: "topology", settings?: {}): void;
  reset(moduleName: "touch", settings?: {enabled?: boolean, doubleTapTimer?: number, eventRate?: number}): void;
  reset(moduleName: "dagre", settings?: {defaultDirected?: boolean, defaultMultigraph?: boolean, defaultCompound?: boolean, defaultRankDir?: string, defaultDuration?: number, maxNbNodes?: number, maxNbEdges?: number}): void;
  reset(moduleName: "neo4J", settings?: {}): void;
}

export interface Shapes {
}

export interface Texts {
  setNodeTextDrawing(value: boolean): void;
  setEdgeTextDrawing(value: boolean): void;
  setTextDrawing(value: boolean): void;
  isNodeTextDrawingEnabled(): boolean;
  isEdgeTextDrawingEnabled(): boolean;
}

export interface Tooltip {
  onNodeHover(f: ((node: Node, x: number, y: number) => HTMLElement)|string): void;
  onEdgeHover(f: ((edge: Edge, x: number, y: number) => HTMLElement)|string): void;
  onNodeClick(f: ((node: Node, x: number, y: number) => HTMLElement)|string): void;
  onEdgeClick(f: ((edge: Edge, x: number, y: number) => HTMLElement)|string): void;
  onBackgroundClick(f: ((x: number, y: number) => HTMLElement)|string): void;
  onNodeRightClick(f: ((node: Node, x: number, y: number) => HTMLElement)|string): void;
  onEdgeRightClick(f: ((edge: Edge, x: number, y: number) => HTMLElement)|string): void;
  onBackgroundRightClick(f: ((x: number, y: number) => HTMLElement)|string): void;
  onNodeDoubleClick(f: ((node: Node, x: number, y: number) => HTMLElement)|string): void;
  onEdgeDoubleClick(f: ((edge: Edge, x: number, y: number) => HTMLElement)|string): void;
  onBackgroundDoubleClick(f: ((x: number, y: number) => HTMLElement)|string): void;
  hide(): void;
  isShown(): boolean;
}

export interface Topology {
  getAdjacentNodes(sourceNodes: Node|NodeId|Array<Node|NodeId>, options?: {depth?: number, direction?: string, includeSources?: boolean}): Array<Node>;
  getAdjacentEdges(sourceNodes: Node|NodeId|Array<Node|NodeId>, options?: {depth?: number, direction?: string}): Array<Edge>;
  getAdjacentElements(sourceNodes: Node|NodeId|Array<Node|NodeId>, options?: {type?: string, depth?: number, direction?: string, includeSources?: boolean}): Array<Node|Edge>;
  getConnectedComponents(returnIndexes?: boolean): Array<Array<Node>>|Array<Array<number>>;
}

export interface Touch {
  x: number;
  y: number;
  pressed: boolean;

}

export interface Dagre {
  start(options?: {directed?: boolean, multigraph?: boolean, compound?: boolean, rankdir?: string}, layoutOptions?: {duration?: number, onEnd?: (() => void)}): boolean;
  stop(): void;
}

export interface Neo4J {
  connect(url: string, username: string, password: string): void;
  query(command: string, callback?: ((queryResult: any) => void)): Promise<any>;
}

export default class Ogma {
  constructor(parameters?: {graph?: {nodes: Array<NodeData>, edges: Array<EdgeData>}, render?: Array<string>|string, plugins?: Array<string>|string, core?: Array<string>|string, settings?: any, container?: HTMLElement|string, onStart?: (() => void), touch?: boolean});

  clear(): void;
  kill(): void;
  on(name: string, handler: (() => void)): void;
  on(events: { [key: string] : ((...args : any[]) => void) }): void;
  off(name: string, handler: (() => void)): void;

  nodes: Array<Node>;
  edges: Array<Node>;

  animations: Animations;
  badges: Badges;
  brand: Brand;
  camera: Camera;
  cameraInteractions: CameraInteractions;
  captor: Captor;
  coalescence: Coalescence;
  connectNodes: ConnectNodes;
  design: Design;
  drag: Drag;
  drawing: Drawing;
  dsl: Dsl;
  events: Events;
  exports: Exports;
  filter: Filter;
  fps: Fps;
  generators: Generators;
  geo: Geo;
  graph: Graph;
  groups: Groups;
  halos: Halos;
  hover: Hover;
  icons: Icons;
  images: Images;
  imports: Imports;
  keyboard: Keyboard;
  lasso: Lasso;
  layouts: Layouts;
  legend: Legend;
  locate: Locate;
  mouse: Mouse;
  outlines: Outlines;
  partitions: Partitions;
  pathfinding: Pathfinding;
  pieCharts: PieCharts;
  pinning: Pinning;
  pulses: Pulses;
  render: Render;
  selection: Selection;
  settings: Settings;
  shapes: Shapes;
  texts: Texts;
  tooltip: Tooltip;
  topology: Topology;
  touch: Touch;
  
  dagre: Dagre;
  neo4J: Neo4J;
}