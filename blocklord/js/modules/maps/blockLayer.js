import L from 'leaflet';
import React from 'react';
import {
    render
} from 'react-dom';
import {
    GridLayer
} from 'react-leaflet';
import Parse from 'parse';
import Block from './block';
import BlockGroup from './blockGroup';
import EmptyBlock from './emptyBlock';

Parse.initialize(process.env.REACT_APP_APP_ID);
Parse.serverURL = process.env.REACT_APP_SERVER_URL;

class BlockGenerator extends L.GridLayer {
        createTile(coords, done) {
                const tileKey = this._tileCoordsToKey(coords);
                const tileBounds = this._tileCoordsToBounds(coords);
                const store = this.options.store;
                const filtered = this.options.blocks.filter(i => i.get('center')._latitude > tileBounds._southWest.lat &&
                    i.get('center')._latitude < tileBounds._northEast.lat &&
                    i.get('center')._longitude > tileBounds._southWest.lng &&
                    i.get('center')._longitude < tileBounds._northEast.lng
                );
                const sorted = filtered.sort((a, b) => b.get('finalPrice') - a.get('finalPrice'));
                const container = document.createElement('div');
                container.className += 'cellContainer';
                if (sorted.length === 1 && tileKey.endsWith(':16')) {
                    render( < Block history = {
                            this.options.history
                        }
                        results = {
                            sorted
                        }
                        center = {
                            sorted[0].get('center')
                        }
                        store = {
                            store
                        }
                        tile = {
                            sorted[0]
                        }
                        tileKey = {
                            tileKey.slice(0, -3)
                        }
                        />, container);
                        done(container);
                    }
                    else if (sorted.length > 0 && !tileKey.endsWith(':16')) {
                        render( < BlockGroup history = {
                                this.options.history
                            }
                            results = {
                                sorted
                            }
                            store = {
                                store
                            }
                            />, container);
                            done(container);
                        }
                        else if (sorted.length === 0 && tileKey.endsWith(':16')) {
                            render( < EmptyBlock history = {
                                    this.options.history
                                }
                                results = {
                                    sorted
                                }
                                tileKey = {
                                    tileKey.slice(0, -3)
                                }
                                store = {
                                    store
                                }
                                />, container);
                                done(container);
                            }
                            else {
                                done(container);
                            }
                            return container;
                        }
                    };

                    export default class BlockLayer extends GridLayer {
                        createLeafletElement(props) {
                            return new BlockGenerator({
                                blocks: props.blocks,
                                tileSize: 128,
                                history: props.history,
                                updateWhenZooming: false,
                                updateWhenIdle: true,
                                zoom: props.zoom,
                                store: this.props.store,
                            });
                        }
                    }



                    // WEBPACK FOOTER //
                    // ./src/modules/maps/blockLayer.js