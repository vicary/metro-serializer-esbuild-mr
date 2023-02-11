const {makeMetroConfig} = require('@rnx-kit/metro-config');
const {
  MetroSerializer,
  esbuildTransformerConfig,
} = require('@rnx-kit/metro-serializer-esbuild');

module.exports = makeMetroConfig({
  serializer: {customSerializer: MetroSerializer()},
  transformer: esbuildTransformerConfig,
});
