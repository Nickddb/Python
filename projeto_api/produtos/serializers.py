from rest_framework import serializers
from .models import Categoria, Produto

class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categoria
        fields = '__all__'

class ProdutoSerializer(Serializers.ModelSerializer):
    categoria = CategoriaSerializer(read_only = True)
    categoria_id = serializers.primaryKeyRelatedField(queryset = Categoria.objects, source = 'categoria', write_only = True)

    class Meta:
        model = Produto
        fields = '__all__'